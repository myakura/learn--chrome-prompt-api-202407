async function summarize(input) {

	if (!window.ai) {
		throw new Error('window.ai is not defined');
	}

	const canCreate = await ai.canCreateTextSession();
	if (canCreate !== 'readily') {
		throw new Error('Cannot create a text session.');
	}

	const session = await ai.createTextSession({
		systemPrompt: "You are a friendly, helpful assistant specialized in summarizing and editing."
	});
	const prompt = `Summarize the following text.\n\n### input\n${input}`;

	try {
		const response = await session.prompt(prompt);
		return response;
	}
	catch (error) {
		throw error;
	}
}

export { summarize }
