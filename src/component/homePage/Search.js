import * as React from 'react';
import { DatePicker, Space } from 'antd';
import { Button } from '@mui/material'
import 'antd/dist/antd.css';

const { RangePicker } = DatePicker;

function Search() {

    const [value, setValue] = React.useState([null, null]);

    return (
        <div className='search-section'>
            <div className='w-100'>

                <div className='search-bg'>
                    <div className='location'>
                        <p>Location</p>

                        <div class="me-2">
                            <select class="form-select location-option" id="floatingSelectGrid" aria-label="Floating label select example">
                                <option selected>Search</option>
                                <option value="1">Sydney</option>
                                <option value="2">Melbourne</option>
                            </select>

                        </div>
                    </div>
                    <div className='move-in'>
                    <div className='d-flex justify-content-between mr-r'>
                    <p>Move-in</p>
                    <p>Move-out</p>
                    </div>
                        <Space direction="vertical" size={12}>
                            <RangePicker />
                        </Space>
                    </div>
{
                    // <div className='move-out'>
                    //     <p>Move-out</p>
                    //     <h3>Select date</h3>
                    // </div>
                    }
                    <div className='d-flex'>
                        <Button variant="contained" className='search-btn1'>
                            Search
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
