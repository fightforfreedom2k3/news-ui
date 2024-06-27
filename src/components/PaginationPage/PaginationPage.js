import { Pagination, Stack } from '@mui/material';
import { useState } from 'react';
import MoreNews2 from '../pageComponent/MoreNews2/MoreNews2';

const itemsPerPage = 4;
const PaginationPage = ({ arr }) => {
    const totalItems = arr.length;
    const [page, setPage] = useState(1);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = arr.slice(startIndex, endIndex);

    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <Stack spacing={2} alignItems={'center'}>
            <Stack spacing={2} direction={'column'}>
                {currentItems.map((data) => {
                    return <MoreNews2 data={data} />;
                })}
            </Stack>
            <Pagination count={Math.ceil(totalItems / itemsPerPage)} page={page} onChange={handleChange} />
        </Stack>
    );
};

export default PaginationPage;
