/* global React */
/* global ReactQuill */

console.log('ReactQuill', ReactQuill);
// const UMDModuleName = import('./react-quill').then((module) => module.default);

var EMPTY_DELTA = { ops: [] };

var formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
];

var modules = {
  // htmlEditButton: {
  //   msg: 'Edit the content in HTML format', //Custom message to display in the editor, default: Edit HTML here, when you click "OK" the quill editor's contents will be replaced
  //   okText: 'Ok', // Text to display in the OK button, default: Ok,
  //   cancelText: '<span>Cancle</span>', // Text to display in the cancel button, default: Cancel
  //   buttonHTML: '&lt;&gt;', // Text to display in the toolbar button, default: <>
  //   buttonTitle: 'Show HTML source', // Text to display as the tooltip for the toolbar button, default: Show HTML source
  //   syntax: false, // Show the HTML with syntax highlighting. Requires highlightjs on window.hljs (similar to Quill itself), default: false
  //   prependSelector: 'div#myelement', // a string used to select where you want to insert the overlayContainer, default: null (appends to body),
  //   editorModules: {}, // The default mod
  // },
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image', 'htmlEditButton'],
    ['htmlEditButton'],
  ],
};

function App() {
  const { value, editor } = ReactQuill.useEditor({
    // modules: undefined,
    // formats,
    defaultValue: 'Apple is sweet 123',
  });
  return (
    <div>
      {editor}

      <button
        onClick={() => {
          console.log(value);
        }}
      >
        Show Content{' '}
      </button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
