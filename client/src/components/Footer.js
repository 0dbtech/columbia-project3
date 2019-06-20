import React from 'react';

function FooterComponent() {
    return (
        <footer style={footerStyle} class="footer">
        <div class="container">
          <span class="text-muted">Place sticky footer content here.</span>
        </div>
      </footer>
    );
}

const footerStyle = {
        position: 'absolute',
        bottom: '0',
        width: '100%',
        height: '60px',
        lineHeight: '60px',
        backgroundColor: '#f5f5f5'
}

export default FooterComponent;