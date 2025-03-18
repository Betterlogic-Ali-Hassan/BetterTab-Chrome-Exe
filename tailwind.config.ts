/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
		  borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)',
		  },
		  colors: {
			background: 'var(--background-color)',
			text: 'var(--text-color)',
			card: 'var(--card-color)',
			border: 'var(--border-color)',
			foreground: 'var(--text-foreground)',
			badge: 'var(--badge-color)',
			searchbar: 'var(--searchbar-color)',
			brand: 'var(--brand-color)',
			hover: 'var(--hover-color)',
			error: 'var(--error-color)',
			success: 'var(--success-color)',
			'btn-hover':'var( --btn-hover)',
			'sidebar-hover':'var( --sidebar-hover)',
			'brand-hover':'var( --brand-hover)',
			'selected-hover':'var( --selected-hover-bg)',
			'selected-bg':'var( --selected-bg)',
			'selected-border':'var( --selected-border)',
			'warn-border':'var( --warn-border)',
			'warn-color':'var( --warn-color)',
			'warn-text':'var( --warn-text)',
			'home-sidebar-hover':'var( --home-sidebar-hover)',

			
		  },
		},
	  },
  plugins: [require("tailwindcss-animate")],
};
