/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts,scss}'],
    theme: {
        extend: {},
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                kanagawa: {
                    'color-scheme': 'dark',
                    primary: '#2D4F67',
                    'primary-content': '#DCD7BA',
                    secondary: '#223249',
                    'secondary-content': '#DCD7BA',
                    accent: '#DCD7BA',
                    neutral: '#363646',
                    'neutral-content': '#DCD7BA',
                    'base-100': '#2A2A37',
                    'base-200': '#1F1F28',
                    'base-300': '#16161D',
                    'base-content': '#DCD7BA',
                    info: '#A3D4D5',
                    'info-content': '#2A2A37',
                    success: '#76946A',
                    'success-content': '#2A2A37',
                    warning: '#E6C384',
                    'warning-content': '#2A2A37',
                    error: '#FF5D62',
                    'error-content': '#2A2A37',
                },
            },
            'dracula',
            'light',
            'dark',
            'retro',
        ],
    },
};
