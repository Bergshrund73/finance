// обертка над твоими запросами, чтобы при возникновении ошибки не падал сервер

const asyncHandler = fn => (req, res, next) =>
    Promise
        .resolve(fn(req, res, next))
        .catch(next)

module.exports = asyncHandler
