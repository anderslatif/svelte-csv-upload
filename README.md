# Svelte CSV Upload

This creates an upload button that will either: 

* allow you to upload any file

* take any CSV file and parse it into a Javascript array

* take a Javascript array and parse as CSV



## Usage

# Plain Upload

Since there are no libraries for this and remembering how to bind things correctly can be a bother why not offer this:

`import UploadCSV from 'upload-csv-svelte';`

`<UploadCSV allowedFileExtensions={['png', 'jpeg', 'gif']} onUpload={(file) => console.log("this is the uploaded file: ", file)} >`



# CSV Upload

`import UploadCSV from 'upload-csv-svelte';`

`<UploadCSV onUpload={(file) => console.log("this is the parsed file: ", file)} />`

# CSV Parse

`import UploadCSV from 'upload-csv-svelte';`

`<UploadCSV onUpload={(csvData) => console.log("this is the parsed data converted to CSV: ", csvData)} dataToCSV={[["hello", "nice"], ["convert", "to", "csv"]]} />`

#### Suggestions are welcome

Open an issue on Github.
