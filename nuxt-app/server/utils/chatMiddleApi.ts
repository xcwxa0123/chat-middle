// type kakuyomuApiText = keyof KakuyomuApiClass
import { Configuration, OpenAIApi } from "openai";

class ChatMiddleApiClass{
    configuration = new Configuration({
        // apiKey: process.env.OPENAI_API_KEY || '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',
        apiKey: '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'
    });
    openai = new OpenAIApi(this.configuration);
    // /chatmiddleApi/getChatCompletions.post
    public async getChatCompletions(data: any): Promise<any>{
        // {
        //     "model": "gpt-3.5-turbo",
        //     "messages": [{"role": "system", "content": "You are a helpful assistant."}, {"role": "user", "content": "Hello!"}]
        // }
        const startTime = new Date().getTime()
        const result: any = await this.openai.createChatCompletion(data);
        const endTime = new Date().getTime()
        result.data['accessTime'] = startTime - endTime
        return result.data
    }
}
export default () => {
    return new ChatMiddleApiClass()
}