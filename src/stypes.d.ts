type Category = {
    name: string;
    type: 'whitelist' | 'blacklist';
    matches: string[];
    settings: {
        color?: string;
    }
}