import Api from './Api'

export default {
    create (details) {
        return Api().post('/product', details, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }
}