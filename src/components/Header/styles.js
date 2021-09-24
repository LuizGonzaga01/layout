import styled from "styled-components";
import Lupa from '../../image/icon-search.svg'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 61px;
    left: 15rem;
    background: var(--white);
    padding: 0;

    .input-search {
        display: flex;
        padding-left: 2rem;
        width: 271px;
        border: 0px;
        height: 40px;
        font-size: 0.8rem;
        background: var(--background) url('${Lupa}') no-repeat;
        background-position: bottom 50% left 3%;
        border-radius: 3px;
        margin-left: 30px;
        outline: 0;
    }

    main {
        padding: 1rem 2rem;
    }

    `;