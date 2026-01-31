import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: 'class',
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            typography: {
                invert: {
                    css: {
                        '--tw-prose-body': '#e5e7eb',
                        '--tw-prose-headings': '#f9fafb',
                        '--tw-prose-lead': '#e5e7eb',
                        '--tw-prose-links': '#38bdf8',
                        '--tw-prose-bold': '#f9fafb',
                        '--tw-prose-counters': '#9ca3af',
                        '--tw-prose-bullets': '#4b5563',
                        '--tw-prose-hr': '#1f2937',
                        '--tw-prose-quotes': '#f9fafb',
                        '--tw-prose-quote-borders': '#4b5563',
                        '--tw-prose-captions': '#9ca3af',
                        '--tw-prose-code': '#e5e7eb',
                        '--tw-prose-pre-code': '#e5e7eb',
                        '--tw-prose-pre-bg': '#020617',
                        '--tw-prose-th-borders': '#4b5563',
                        '--tw-prose-td-borders': '#1f2937',
                    },
                },
            },
        },
    },
    plugins: [typography()],
};

export default config;
