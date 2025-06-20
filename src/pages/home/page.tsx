import React, { useState, useRef, useEffect } from 'react';
import {
    Grid,
    Typography,
    Button,
    InputBase,
    Box,
    Paper,
    Stack,
    Divider,
    Tooltip,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import StopIcon from '@mui/icons-material/Stop';
import { getBotResponse, Message } from '../../utils/chatbotResponse';
import { renderMessage } from '../../utils/renderMessage/renderMessage';
import TextareaAutosize from '@mui/material/TextareaAutosize';
export function Home() {
    const [openChatbot, setOpenChatbot] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const [botTypingText, setBotTypingText] = useState('');
    const [typingIntervalId, setTypingIntervalId] = useState<NodeJS.Timeout | null>(null);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const dialogRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 450, y: 70 });
    const pos = useRef({ x: 0, y: 0, isDragging: false });

    const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    useEffect(scrollToBottom, [messages, botTypingText]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (pos.current.isDragging) {
                setPosition((prev) => ({ x: prev.x + e.movementX, y: prev.y + e.movementY }));
            }
        };
        const handleMouseUp = () => (pos.current.isDragging = false);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    const handleMouseDown = (e: React.MouseEvent) => {
        pos.current = { x: e.clientX, y: e.clientY, isDragging: true };
    };

    const handleSend = () => {
        if (!input.trim() || isTyping) return;

        const userMsg: Message = { sender: 'user', text: input };
        setMessages((prev) => [...prev, userMsg]);
        setIsTyping(true);
        setBotTypingText('');

        const botReply: Message = getBotResponse(input);
        setInput('');

        let index = 0;
        const interval = setInterval(() => {
            if (index <= botReply.text.length) {
                setBotTypingText(botReply.text.slice(0, index));
                index++;
            } else {
                clearInterval(interval);
                setMessages((prev) => [...prev, { sender: 'bot', text: botReply.text }]);
                setIsTyping(false);
                setBotTypingText('');
                setTypingIntervalId(null);
            }
        }, 20);

        setTypingIntervalId(interval);
    };

    const handleStopTyping = () => {
        if (typingIntervalId) {
            clearInterval(typingIntervalId);
            setMessages((prev) => [...prev, { sender: 'bot', text: botTypingText }]);
            setBotTypingText('');
            setIsTyping(false);
            setTypingIntervalId(null);
        }
    };

    const handleCloseChatbot = () => {
        setOpenChatbot(false);
        setMessages([]);
        setInput('');
        setBotTypingText('');
        if (typingIntervalId) clearInterval(typingIntervalId);
    };

    return (
        <>
            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h5" gutterBottom>
                        ChatBot
                    </Typography>
                    <Button variant="contained" sx={{ mt: 2 }} onClick={() => setOpenChatbot(true)}>
                        Open ChatBot
                    </Button>
                </Grid>
            </Grid>

            {openChatbot && (
                <Paper
                    ref={dialogRef}
                    sx={{
                        position: 'fixed',
                        left: position.x,
                        top: position.y,
                        width: 400,
                        zIndex: 1500,
                        borderRadius: 2,
                        boxShadow: 6,
                        bgcolor: 'background.paper',
                        display: 'flex',
                        flexDirection: 'column',
                        height: 500,
                    }}
                >
                    <Box
                        onMouseDown={handleMouseDown}
                        sx={{
                            bgcolor: 'primary.main',
                            color: 'white',
                            p: 1,
                            px: 2,
                            cursor: 'move',
                            userSelect: 'none',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="subtitle1">ChatBot Assistant</Typography>
                        <Button onClick={handleCloseChatbot} color="error" sx={{ minWidth: 0 }}>
                            <CloseIcon sx={{ color: 'white' }} />
                        </Button>
                    </Box>

                    <Divider />

                    <Box sx={{ flex: 1, overflowY: 'auto', p: 2 }}>
                        <Stack spacing={1}>
                            {messages.map((msg, i) => renderMessage(msg, i))}
                            {isTyping && (
                                <Box>
                                    <Typography variant="caption" color="secondary.main">ChatBot</Typography>
                                    <Box
                                        sx={{
                                            bgcolor: '#f1f1f1',
                                            px: 2,
                                            py: 1,
                                            borderRadius: 2,
                                            maxWidth: '75%',
                                            color: 'black',
                                        }}
                                    >
                                        <Typography variant="body2">{botTypingText}<span className="blinking-cursor">|</span></Typography>
                                    </Box>
                                </Box>
                            )}
                            <div ref={messagesEndRef} />
                        </Stack>
                    </Box>

                    <Divider />
                    <Box sx={{ p: 1, display: 'flex', gap: 1, alignItems: 'flex-end', }}>
                        {/* Input Area */}
                        <Box sx={{ position: 'relative', flex: 1 }}>
                            <TextareaAutosize
                                value={input}
                                onChange={(e: any) => setInput(e.target.value)}
                                onKeyDown={(e: any) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        e.preventDefault();
                                        handleSend();
                                    }
                                }}
                                minRows={1}
                                maxRows={5}
                                placeholder="Type a message..."
                                style={{
                                    width: '100%',
                                    padding: '8px 40px 8px 16px',
                                    borderRadius: '8px',
                                    border: '1px solid #ccc',
                                    fontSize: '14px',
                                    resize: 'none',
                                    overflowY: 'auto',
                                    boxSizing: 'border-box',
                                    lineHeight: 1.5,
                                    fontFamily: 'inherit',
                                }}
                            />

                            {/* Clear Button Inside Input */}
                            {input && (
                                <Button
                                    onClick={() => setInput('')}
                                    size="small"
                                    color="secondary"
                                    sx={{
                                        position: 'absolute',
                                        right: 8,
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        minWidth: 'auto',
                                        padding: '2px 6px',
                                        fontSize: '0.75rem',
                                        lineHeight: 1,
                                        textTransform: 'none',
                                    }}
                                >
                                    Clear
                                </Button>
                            )}
                        </Box>

                        {/* Send / Stop Button */}
                        <Tooltip title={isTyping ? 'Stop Response' : 'Send Message'} arrow>
                            <Button
                                onClick={isTyping ? handleStopTyping : handleSend}
                                variant="contained"
                                sx={{ minWidth: 0, height: 40, width: 40, borderRadius: '50%' }}
                                color={isTyping ? 'warning' : 'primary'}
                            >
                                {isTyping ? <StopIcon /> : <SendIcon />}
                            </Button>
                        </Tooltip>
                    </Box>


                </Paper>
            )}
        </>
    );
}