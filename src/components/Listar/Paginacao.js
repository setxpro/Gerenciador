
import Pagination from 'react-bootstrap/Pagination';
import PropTypes from 'prop-types';

function Paginacao(props) {


    const generateFirstItem = () => {
        return (
            <Pagination 
            style={{marginLeft: '1rem'}}
                key="pageFirst"
                onClick={() => props.changePage(1)}
                disabled={props.currentPage === 1}
            />
        );
    }
    const generatePreviousItem = () => {
        return (
            <Pagination.Prev
                key="pagPrev"
                onClick={() => props.changePage(props.currentPage - 1) }
                disabled={props.currentPage === 1}
            />

        );
    }

    const generateItensNumeric = page => {

        return(
            <Pagination.Item
                key={page}
                active={page === props.currentPage}
                onClick={()=> props.changePage(page)}
            >
                 {page}
            </Pagination.Item>
        );
    }

    const generateNextItem = numPages => {
        return(
            <Pagination.Next
                key="pageNext"
                onClick={() => props.changePage(props.currentPage + 1)}
                disabled={props.currentPage === numPages}
            />
        );
    }

    const generateLastItem = numPages => {
        return(
            <Pagination.Last
                key="pagLast"
                onClick={() => props.changePage(numPages)}
                disabled={props.currentPage === numPages}
            />
        );
    }
 
    const getPagination = () => {
        const numPages = Math.ceil(props.totailItem / props.itensforPage );
        let itens = [];
            itens.push(generateFirstItem());
            itens.push(generatePreviousItem());

        for(let page = 1; page <= numPages; page++) 
        {
            itens.push(generateItensNumeric(page));
        } 

        itens.push(generateNextItem(numPages));
        itens.push(generateLastItem(numPages)); 

        return itens;
    }   

    return(
        <Pagination>
            {getPagination()}
        </Pagination>
    );
}

Paginacao.propTypes = {
    totailItem: PropTypes.number.isRequired,
    itensforPage: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    changePage: PropTypes.func.isRequired,
}

export default Paginacao;