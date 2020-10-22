import { Col, Row } from 'antd';
import React, { useState } from 'react';

// Ant design
import { Input } from 'antd';
// Products
import ProductList from '../components/ProductList';
import { Typography } from 'antd';

const { Title } = Typography;

const { Search } = Input;

export default function Home() {
    const [query, updateQuery] = useState('');
    return (
        <>
            <Row gutter={[16, 24]}>
                <Col
                    xs={{ span: 24, offset: 4 }}
                    lg={{ span: 24, offset: 4 }}
                    span={24}
                >
                    <Title level={2} style={{ color: '#fa5723' }}>
                        {' '}
                        E-commerce website build with Webiny Headless CMS,
                        Next.js, and Stripe
                    </Title>
                </Col>
            </Row>
            <Row>
                <Col
                    xs={{ span: 12, offset: 6 }}
                    lg={{ span: 24, offset: 8 }}
                    span={24}
                >
                    <Title level={4} type="success">
                        {' '}
                        Buy Swag from the best Open Source Projects
                    </Title>
                </Col>
            </Row>
            <Row>
                <Col
                    xs={{ span: 12, offset: 6 }}
                    lg={{ span: 24, offset: 6 }}
                    span={24}
                >
                    <Search
                        placeholder="Search for products"
                        onSearch={(value) => console.log(value)}
                        style={{
                            maxWidth: 650,
                        }}
                        onChange={(e) =>
                            updateQuery(e.target.value.toLocaleLowerCase())
                        }
                        value={query}
                    />
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <ProductList search={query} />
                </Col>
            </Row>
        </>
    );
}
