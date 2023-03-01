import type { PageServerLoad } from './$types';

import defaultTheme from '$lib/fosbury/theme/default.css?inline';
import monochrome from '$lib/fosbury/theme/monochrome.css?inline';
import nord from '$lib/fosbury/theme/nord.css?inline';
import pink from '$lib/fosbury/theme/p i n k.css?inline';
import { highlighter } from '$lib/shiki';

export const load = (async () => {
    return {
        code: {
            install: highlighter.codeToHtml('pnpm install fosbury # or npm, or yarn...', { lang: 'bash' }),
            jsSimplest: highlighter.codeToHtml('import "fasbury";', { lang: 'js' }),
            cssSimplest: highlighter.codeToHtml('@import "fasbury";', { lang: 'css' }),
            custom: highlighter.codeToHtml('import "fasbury/reset.css";\nimport"fasbury/core.css";', { lang: 'js' }),
            theme: highlighter.codeToHtml('import "fasbury";\nimport "fasbury/theme/nord.css"', { lang: 'js' }),
        },

        themeSources: {
            default: {
                code: defaultTheme,
                highlighted: highlighter.codeToHtml(defaultTheme, { lang: 'css' }),
            },

            nord: {
                code: nord,
                highlighted: highlighter.codeToHtml(nord, { lang: 'css' }),
            },

            monochrome: {
                code: monochrome,
                highlighted: highlighter.codeToHtml(monochrome, { lang: 'css' }),
            },

            'p i n k': {
                code: pink,
                highlighted: highlighter.codeToHtml(pink, { lang: 'css' }),
            },
        }
    };
}) satisfies PageServerLoad;