async function summarize(input) {

	if (!window.ai) {
		throw new Error('window.ai is not defined');
	}

	const canCreate = await window.ai.canCreateTextSession();
	if (canCreate !== 'readily') {
		throw new Error('Cannot create a text session.');
	}

	const session = await window.ai.createTextSession();
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
