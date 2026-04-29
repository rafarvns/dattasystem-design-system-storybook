import { addons, types } from '@storybook/manager-api'
import React from 'react'

addons.register('datta/download-bundle', () => {
  addons.add('datta/download-bundle/tool', {
    type: types.TOOL,
    title: 'Download CSS Bundle',
    render: () =>
      React.createElement(
        'a',
        {
          href: './datta-system-bundle.zip',
          download: true,
          title: 'Baixar bundle CSS do Datta System',
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 12px',
            color: '#ffffff',
            background: '#4A82CC',
            border: 'none',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: '600',
            textDecoration: 'none',
            fontFamily: 'sans-serif',
            cursor: 'pointer',
            transition: 'background-color 150ms ease',
          },
          onMouseEnter: (e) => {
            e.currentTarget.style.background = '#3268B2'
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.background = '#4A82CC'
          },
        },
        '⬇ Download CSS'
      ),
  })
})
