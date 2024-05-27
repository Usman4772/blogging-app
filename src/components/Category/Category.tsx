import React from 'react';
import { Select } from 'antd';



function Category({category}:any){
    const handleChange = (value: string) => {
        category(value)
      };
return(
    <Select
      defaultValue="all"
      style={{ width: 300 }}
      onChange={handleChange}
      options={[
        { value: 'business', label: 'Business' },
        { value: 'political', label: 'Political' },
        { value: 'sports', label: 'Sports' },
        {value:'others',label:'others'}
      ]}
    />
    
);
}

export default Category;