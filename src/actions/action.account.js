export const ACCOUNT_LOGIN = 'ACCOUNT_LOGIN';
export const ACCOUNT_LOGOUT = 'ACCOUNT_LOGOUT';
export const RESET_TOKEN = 'RESET_TOKEN';

export const ACCOUNT_GET_PROFILE = 'ACCOUNT_GET_PROFILE';
export const ACCOUNT_GET_PROFILE_SUCCESS = 'ACCOUNT_GET_PROFILE_SUCCESS';
export const ACCOUNT_GET_PROFILE_FAILED = 'ACCOUNT_GET_PROFILE_FAILED';

export const ACCOUNT_UPDATE_PROFILE = 'ACCOUNT_UPDATE_PROFILE';
export const ACCOUNT_UPDATE_PROFILE_SUCCESS = 'ACCOUNT_UPDATE_PROFILE_SUCCESS';
export const ACCOUNT_UPDATE_PROFILE_FAILED = 'ACCOUNT_UPDATE_PROFILE_FAILED';

// export const CREATE_PASSCODE = 'CREATE_PASSCODE';
// export const CREATE_PASSCODE_SUCCESS = 'CREATE_PASSCODE_SUCCESS';
// export const CREATE_PASSCODE_INVALID = 'CREATE_PASSCODE_INVALID';
// export const CREATE_PASSCODE_FAILED = 'CREATE_PASSCODE_FAILED';

// export const SETTINGS_UPDATE_PASSCODE = 'SETTINGS_UPDATE_PASSCODE';
// export const SETTINGS_UPDATE_PASSCODE_SUCCESS = 'SETTINGS_UPDATE_PASSCODE_SUCCESS';
// export const SETTINGS_UPDATE_PASSCODE_INVALID = 'SETTINGS_UPDATE_PASSCODE_INVALID';
// export const SETTINGS_UPDATE_PASSCODE_FAILED = 'SETTINGS_UPDATE_PASSCODE_FAILED';

export const actionTypes = {
    ACCOUNT_LOGIN,
    ACCOUNT_LOGOUT,
    RESET_TOKEN,
    ACCOUNT_GET_PROFILE,
    ACCOUNT_GET_PROFILE_SUCCESS,
    ACCOUNT_GET_PROFILE_FAILED,
    ACCOUNT_UPDATE_PROFILE,
    ACCOUNT_UPDATE_PROFILE_SUCCESS,
    ACCOUNT_UPDATE_PROFILE_FAILED,
};

export const resetToken = (auth) => {
    console.log(auth);
    return {
        type: RESET_TOKEN,
        payload: auth,
    };
};

// account Login
export const accountLogin = (credentials) => ({
    type: ACCOUNT_LOGIN,
    payload: {
        ...credentials,
    },
});

// account logout
export const accountLogout = () => ({
    type: ACCOUNT_LOGOUT,
});

// get profile
export const accountGetProfile = () => ({
    type: ACCOUNT_GET_PROFILE,
});
export const accountGetProfileSuccess = (data) => ({
    type: ACCOUNT_GET_PROFILE_SUCCESS,
    payload: data,
});
export const accountGetProfileFailed = () => ({
    type: ACCOUNT_GET_PROFILE_FAILED,
});

export const accountUpdateProfile = (profile) => ({
    type: ACCOUNT_UPDATE_PROFILE,
    payload: {
        ...profile,
    },
});
export const accountUpdateProfileSuccess = (data) => ({
    type: ACCOUNT_UPDATE_PROFILE_SUCCESS,
    payload: data,
});
export const accountUpdateProfileFailed = () => ({
    type: ACCOUNT_GET_PROFILE_FAILED,
});

// // Create passcode
// export const createPasscode = (data) => ({
//     type: CREATE_PASSCODE,
//     payload: data,
// });

// export const createPasscodeSuccess = () => ({
//     type: SETTINGS_UPDATE_PASSCODE_SUCCESS,
// });

// export const createPasscodeInvalid = () => ({
//     type: CREATE_PASSCODE_INVALID,
// });

// export const createpasscodeFailed = () => ({
//     type: CREATE_PASSCODE_FAILED,
// });

// // settings update passcode
// export const settingsUpdatePasscode = (data) => ({
//     type: SETTINGS_UPDATE_PASSCODE,
//     payload: data,
// });

// export const settingsUpdatePasscodeSuccess = () => ({
//     type: SETTINGS_UPDATE_PASSCODE_SUCCESS,
// });

// export const settingsUpdatePasscodeInvalid = () => ({
//     type: SETTINGS_UPDATE_PASSCODE_INVALID,
// });

// export const settingsUpdatePasscodeFailed = () => ({
//     type: SETTINGS_UPDATE_PASSCODE_FAILED,
// });
