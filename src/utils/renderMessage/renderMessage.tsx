import React from 'react';
import { Box, Typography } from '@mui/material';
import { Message } from '../chatbotResponse';
import { JSX } from 'react/jsx-runtime';

export const renderMessage = (msg: Message, i: number): JSX.Element => {
    const isUser = msg.sender === 'user';
    const parts: React.ReactNode[] = [];
    const fullText = msg.text;
    let lastIndex = 0;

    const boldSectionRegex = /\*\*\s*(.+?):\s*\*\*\s*([\s\S]*?)(?=\n\s*\*\*|Example:|उदाहरण:|https?:\/\/|$)/g;

    let boldMatch;
    while ((boldMatch = boldSectionRegex.exec(fullText)) !== null) {
        const before = fullText.slice(lastIndex, boldMatch.index).trim();
        if (before) {
            parts.push(
                <Typography key={`before-${boldMatch.index}`} variant="body2" color="text.primary">
                    {before}
                </Typography>
            );
        }

        const title = boldMatch[1].trim();
        const content = boldMatch[2].trim();

        const bulletLines = content.split(/[\n•\-]\s*/).filter(line => line.trim() !== '');
        parts.push(
            <Box key={`section-${boldMatch.index}`} sx={{ mt: 1 }}>
                <Typography variant="subtitle2" fontWeight="bold">{title}</Typography>
                {bulletLines.map((line, idx) => (
                    <Typography key={idx} variant="body2" color="text.secondary">
                        • {line.trim()}
                    </Typography>
                ))}
            </Box>
        );

        lastIndex = boldSectionRegex.lastIndex;
    }

    let remaining = fullText.slice(lastIndex).trim();

    // 2️⃣ Extract Example
    const exampleRegex = /(Example|उदाहरण):\s*(.*?)(?=\n|https?:\/\/|$)/i;
    const exampleMatch = remaining.match(exampleRegex);
    if (exampleMatch) {
        const before = remaining.slice(0, exampleMatch.index).trim();
        if (before) {
            parts.push(
                <Typography key="example-before" variant="body2" color="text.primary">
                    {before}
                </Typography>
            );
        }

        parts.push(
            <Box key="example" sx={{ mt: 1 }}>
                <Typography variant="subtitle2" fontWeight="bold">{exampleMatch[1]}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {exampleMatch[2].trim()}
                </Typography>
            </Box>
        );

        remaining = remaining.slice(exampleMatch.index! + exampleMatch[0].length).trim();
    }

    // 3️⃣ Extract Links
    const urlRegex = /(https?:\/\/[^\s]+)/gi;
    let lastLinkIndex = 0;
    let urlMatch;
    while ((urlMatch = urlRegex.exec(remaining)) !== null) {
        const before = remaining.slice(lastLinkIndex, urlMatch.index).trim();
        if (before) {
            parts.push(
                <Typography key={`text-${urlMatch.index}`} variant="body2" color="text.primary">
                    {before}
                </Typography>
            );
        }

        parts.push(
            <Box key={`url-${urlMatch.index}`} sx={{ mt: 1 }}>
                <Typography variant="subtitle2" fontWeight="bold">For more info, visit</Typography>
                <Typography variant="body2">
                    <a
                        href={urlMatch[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#0288d1', wordBreak: 'break-word' }}
                    >
                        {urlMatch[0]}
                    </a>
                </Typography>
            </Box>
        );

        lastLinkIndex = urlRegex.lastIndex;
    }

    const afterLinkText = remaining.slice(lastLinkIndex).trim();
    if (afterLinkText) {
        parts.push(
            <Typography key="after-link" variant="body2" color="text.primary">
                {afterLinkText}
            </Typography>
        );
    }

    return (
        <Box key={i}>
            <Typography
                variant="caption"
                sx={{
                    color: isUser ? 'primary.main' : 'secondary.main',
                    mb: 0.3,
                    ml: isUser ? 'auto' : 0,
                    textAlign: isUser ? 'right' : 'left',
                }}
            >
                {isUser ? 'You' : 'Chartbot'}
            </Typography>
            <Box
                sx={{
                    alignSelf: isUser ? 'flex-end' : 'flex-start',
                    bgcolor: isUser ? '#1976d2' : '#f1f1f1',
                    color: isUser ? 'white' : 'black',
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    maxWidth: '75%',
                    wordWrap: 'break-word',
                }}
            >
                {parts}
            </Box>
        </Box>
    );
};
