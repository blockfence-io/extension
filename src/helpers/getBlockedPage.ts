/**
 * getBlockedURL
 *   Returns the URL for a local "Website blocked" page
 *
 */

const getBlockedPageURL = () => chrome.runtime.getURL('blocked.html');

interface getBlockedPageParams {
    url: string;
}

export default ({ url }: getBlockedPageParams): string => {
    const params = new URLSearchParams({ url });
    return `${getBlockedPageURL()}?${params.toString()}`;
};
