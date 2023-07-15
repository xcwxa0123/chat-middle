export default defineEventHandler(async event => {
    const dataBody = await readBody(event)
    try {
        const result = await chatMiddleApi().getChatCompletions(dataBody.msgData)
        // const resData = JSON.parse(result)
        return result.choices[0].message.content
        // return autoResponseBody({ ...resData })
    } catch (error) {
        return autoResponseBody({ data: dataBody.msgData, code: 500, msg: String(error) })
        // return autoResponseBody({ data: {}, code: 500, msg: String(error) })
    }
})