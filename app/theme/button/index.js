export default {
  root: ({ props, context }) => ({
    class: [
      // Positioning
      'relative',
      'flex items-center justify-center shrink-0',
      {
        'gap-2': props.label !== null,
      },
      {
        'flex-row-reverse': props.iconPos === 'right',
      },

      // Sizing
      {
        'h-9 px-4 py-2 rounded-xl':
          props.size === 'small' && props.label !== null,
        'h-10 px-4 py-2 rounded-xl':
          props.size === null && props.label !== null,
        'h-11 text-base px-4 py-2 rounded-xl':
          props.size === 'large' && props.label !== null,
      },
      {
        'size-9 text-xl rounded-xl':
          props.size === 'small' && props.label === null,
        'size-10 text-xl rounded-xl':
          props.size === null && props.label === null,
        'size-11 text-3xl rounded-xl':
          props.size === 'large' && props.label === null,
      },

      // --- Severity Buttons ---
      // Primary
      {
        // Default
        'bg-gray-950 text-gray-0 hover:bg-gray-800 shadow-sm':
          !props.outlined &&
          !props.text &&
          !props.plain &&
          props.severity === null,
        // Text / Plain
        'bg-transparent hover:text-gray-900':
          (props.text || props.plain) && props.severity === null,
      },
      // Secondary
      {
        // Default
        'bg-gray-0 border border-gray-200 hover:border-gray-200 hover:bg-gray-100 shadow-sm':
          !props.outlined &&
          !props.text &&
          !props.plain &&
          props.severity === 'secondary',
        // Text / Plain
        'bg-transparent hover:text-gray-900':
          (props.text || props.plain) && props.severity === 'secondary',
      },

      // Disabled state
      {
        'opacity-60 pointer-events-none cursor-default': context.disabled,
      },

      // Transitions
      'transition duration-200',

      // Misc
      'cursor-pointer overflow-hidden select-none',
    ],
  }),
  label: ({ props }) => ({
    class: [
      'duration-200',
      'font-medium',
      { 'invisible w-0': props.label === null },
    ],
  }),
  loadingicon: () => ({
    class: ['animate-spin'],
  }),
}
