var React = require('react');
var { mount } = require('enzyme');
var ReactQuillInstance = require('../lib/index');
var ReactQuill = ReactQuill.Editor;

/**
 * Render ReactQuill using new Hook
 */

function App() {
  const { value, editor } = ReactQuillInstance.useReactQuill();
  return (
    <div>
      <p>{editor}</p>
      <p className="editor-value">{value}</p>
    </div>
  );
}

function ReactQuillNode(props, children) {
  props = Object.assign(
    {
      modules: { toolbar: ['underline', 'bold', 'italic'] },
      formats: ['underline', 'bold', 'italic'],
    },
    props
  );

  return React.createElement(ReactQuill, props, children);
}

function mountReactQuill(props, node) {
  return mount(ReactQuillNode(props, node));
}

function getQuillInstance(wrapper) {
  return wrapper.instance().getEditor();
}

function getQuillDOMNode(wrapper) {
  return wrapper.getDOMNode().querySelector('.ql-editor');
}

function getQuillContentsAsHTML(wrapper) {
  return getQuillDOMNode(wrapper).innerHTML;
}

function setQuillContentsFromHTML(wrapper, html) {
  const editor = getQuillInstance(wrapper);
  return editor.clipboard.dangerouslyPasteHTML(html);
}

module.exports = {
  mountReactQuill,
  getQuillInstance,
  getQuillDOMNode,
  getQuillContentsAsHTML,
  setQuillContentsFromHTML,
};
