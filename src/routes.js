import { Dataset, createCheerioRouter } from 'crawlee';

export const router = createCheerioRouter();

router.addDefaultHandler(async ({ $, log, json }) => {
    const text = $('.views-row a').map(function () { return $(this).text();}).get();
    console.log( text);
});





