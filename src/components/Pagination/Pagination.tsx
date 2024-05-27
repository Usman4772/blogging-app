import { Pagination } from 'antd';

function Pages(){

    return (
<Pagination defaultCurrent={1} defaultPageSize={3} total={50} />
    )
}


export default Pages;