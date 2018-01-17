export default function appendPlugin() {
  return {
    transformBundle: function transformBundle(source, { format }) {
      return {
        code: source.replace('The answer', format + ' The answer'),
        map: null,
      };
    },
  };
};
