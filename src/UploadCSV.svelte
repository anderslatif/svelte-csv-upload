<script>
    import PapaParse from 'papaparse'

	export let onUpload;
	
	export let dataToCSV = [];
	let prevDataToCSV;

	export let allowedFileExtensions = ['csv'];
	
	let maxFileSize = 3145728;

	// this is the variable that the file gets bound to
	let uploader;

	$: {
		// called on props change
		if (dataToCSV !== prevDataToCSV && dataToCSV.length !== 0) {
			prevDataToCSV = dataToCSV;
			const csvData = PapaParse.unparse(dataToCSV);
			onUpload ? onUpload(csvData) : console.log("Remember to define an onUpload function as props. CSV Data:", csvData);
		}
	}

	function uploadFile(event) {
		event.preventDefault();
		const file = uploader.files[0];

		const fileExtensionArray = file.type.split("/");
		const fileExtension = fileExtensionArray[fileExtensionArray.length-1];

		if (file.size > maxFileSize) {
			console.log("Above the max file size threshold")
			return;
		}
		if (fileExtension.includes('csv') && file.size < maxFileSize ) {

			const csvData = PapaParse.parse(
				file,
				{
					complete: (results) => {
						onUpload ? onUpload(results.data) : console.log("Remember to define an onUpload function as props. Parsed CSV:", results.data);
					}
				}
			);
		} else if (allowedFileExtensions.includes(fileExtension)) {
			onUpload ? onUpload(file) : console.log("Remember to define an onUpload function as props. Plain file:", file);
		} else {
			console.log("Not an allowed file type");
		}
	}
</script>

<input 
	bind:this={uploader}
	on:change={uploadFile} 
	type="file" 
/>
