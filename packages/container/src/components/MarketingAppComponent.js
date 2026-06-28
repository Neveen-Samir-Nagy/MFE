import { mount as marketingMount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
    const ref = useRef(null);

    const history = useHistory();

    useEffect(() => {
        const { onContainerNavigate } = marketingMount(ref.current, {
            onNavigate: ({ pathname }) => {
                if (history.location.pathname !== pathname) {
                    history.push(pathname);
                }
            }
        });
        history.listen(onContainerNavigate);
    }, []);

    return (
        <>
            <div ref={ref} />
        </>
    );
}