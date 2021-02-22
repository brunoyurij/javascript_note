import Api from './api';

const UserService = {
    register: (params) => Api.post('/users/register', params),
    login: async (params) => {
        const response = await Api.post('/users/login', params);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token);
    },
    logout: () => {
        localStorage.removeItem('user', null);
        localStorage.removeItem('token', null);
    },
    updateUser: async (params) =>
        Api.put(`/users`, params, {
            headers: { 'x-access-token': localStorage.getItem('token') },
        }),
    updatePassword: async (params) =>
        Api.put(`/users/password`, params, {
            headers: { 'x-access-token': localStorage.getItem('token') },
        }),
};

export default UserService;
