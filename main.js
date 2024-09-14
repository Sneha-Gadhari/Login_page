// main.js

const handleGoogleSignIn = async (googleUser) => {
    try {
        const profile = googleUser.getBasicProfile();
        const idToken = googleUser.getAuthResponse().id_token;

        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        console.log('ID Token: ' + idToken);

        // Pass the ID token to Appwrite for session creation
        await handleAppwriteLogin(idToken);

    } catch (error) {
        console.error('Error handling Google sign-in:', error);
    }
};
