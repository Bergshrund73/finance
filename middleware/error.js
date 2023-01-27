// кастомная обработка ошибок сервера
// при возникновении ошибки ты создаешь шаблон, как нужно отправить ошибку на клиент
// в этих местах часто пишут кастомные коды ошибок, debug сообщения и прочее

const errorHandler = (err, req, res, next) => {
    console.log(err.statusCode)
    console.log(err.message)

    if (err.statusCode === 404) {
        res.status(404).json({
            success: false,
            error: err.message || 'Not found'
        })
    }

    res.status(err.statusCode || 500).json({
        success: false,
        error: err.message || 'Internal server error'
    })
}

module.exports = errorHandler
