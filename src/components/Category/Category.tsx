import React from 'react';
import { Select } from 'antd';



function Category({category}:any){
    const handleChange = (value: string) => {
        category(value)
      };
return(
    <Select
      defaultValue="All"
      // style={{ width: 300 }}
      onChange={handleChange}
      options={[
        { value: 'business', label: 'Business' },
        { value: 'political', label: 'Political' },
        { value: 'sports', label: 'Sports' },
        {value:'others',label:'others'}
      ]}
      className='w-[200px] md:w-[300px]'
    />
    
);
}

export default Category;