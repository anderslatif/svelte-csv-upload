import UploadCSV from './UploadCSV.svelte';

const app = new UploadCSV({
	target: document.body,
	props: {
		allowedFileExtensions: ['jpeg']
	}
});

export default app;