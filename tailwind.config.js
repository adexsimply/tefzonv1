module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	important: true,
	theme: {
		extend: {
			fontSize: {
				xsmall: "10px",
				regular: "14px",
			},
			colors: {
				"primary-brand-light": "#E5DCF1",
				"primary-dark": "#222222",
				"primary-dark-light": "rgba(34, 34, 34, 0.6)",
				"primary-gray": "#e5e5e5",
				"primary-brand-gray": "#D3D3D3",
        "primary-brand-400": "#8139E69E",
				"input-gray": "#131516",
				"secondary-dark-light": " rgba(34, 34, 34, 0.8)",
				"secondary-dark-lighter": "rgba(34, 34, 34, 0.25)",
				"fb-blue": "#385C8E",
				"tw-blue": "#03A9F4",
				"tw-green": "#4AAE75",
				"tw-green-light": "#67F24B",
				"tw-yellow": "#FFD500",
				"tw-sky-blue": "#89D0E1",
				"tw-red": "#FF4B26",
				"primary-brand-darker": "#522593",
				"secondary-gray": "#E5E5E5",
				"secondary-gray-2": "#EEEEEE",
				"gray-2": "#c4c4c4",
				"gray-3": "#6B6B6B",
				"gray-4": "#BBBABA",
				"gray-5": "#f3f3f3",
				"tag-blue": "rgba(6, 6, 6, 0.8)",
			},
			width: {
				"37p": "37%",
        "85p": "85%",
        "side-bar-width": "458px"
			},
			height: {
				"700px": "700px",
				"48px": "48px !important",
				"50px": "50px !important",
			},
			maxHeight: {
				"860px": "860px",
				"825px": "825px",
				"775px": "775px",
      },
      backgroundImage: {
        'wallet-overlay': "url('src/assets/img/cardOverlay.svg')",
       }
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
