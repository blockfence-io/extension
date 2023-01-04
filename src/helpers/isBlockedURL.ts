/**
 * verifyURL
 *   Verify a URL is not blocked by Blockfence
 *
 */
const blockedList = ['facebook.com', 'instagram.com'];

function extractDomain(path: string): string {
    const url = new URL(path);
    return url.hostname;
}

export default (url: string): boolean => {
    const domain = extractDomain(url);
    return blockedList.filter((blockedDomain) => domain.includes(blockedDomain)).length > 0;
};
