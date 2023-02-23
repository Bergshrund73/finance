// это функция для создания ошибки (в контроллере есть пример)

class ErrorResponse extends Error {
    constructor (message, statusCode) {
        super(message)
        this.statusCode = statusCode
    }
}

module.exports = ErrorResponse
