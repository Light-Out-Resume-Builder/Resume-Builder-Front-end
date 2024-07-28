import React from 'react'

const TemplateHeading = ({title}) => {
  return (
    <div className="text-2xl lg:text-4xl text-black font-bold mb-4 lg:mb-6">
      {title}
    </div>
  );
}

export default TemplateHeading