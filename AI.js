import { OpenAI } from "langchain/llms/openai";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";
import { initializeAgentExecutorWithOptions } from "langchain/agents";
const model = new OpenAI({openAIApiKey: "OPENAI_API_KEY"});
const tools = [new SerpAPI("SERPAPI_KEY"), new Calculator()];
const executor = await initializeAgentExecutorWithOptions(tools, model, {
agentType: "zero-shot-react-description",
});
const result = await executor.call({
input: `How many goals did Erling Haaland score in the first PL match of the
23/24 season? What percentage of last year's record-breaking 36 goals has he achieved so far?`,
});