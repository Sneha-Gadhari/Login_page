// appwrite.js

const sdk = require('node-appwrite');

const client = new sdk.Client();
const account = new sdk.Account(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
    .setProject('66df4513000c5956e0fc'); // Replace with your Appwrite project ID

const handleAppwriteLogin = async (idToken) => {
    try {
        // Create OAuth2 session with Appwrite
        const result = await account.createOAuth2Session(
            'google', // OAuth provider
            'http://127.0.0.1:5500/callback.html', // Redirect URI
            idToken  // ID token obtained from Google
        );
        console.log('OAuth2 session created:', result);
    } catch (error) {
        console.error('OAuth2 session creation failed:', error);
    }
};
