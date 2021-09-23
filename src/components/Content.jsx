import Avatars from '../../src/image/avatars.svg';
import Avatars1 from '../../src/image/Avatar.svg';
import Avatars2 from '../../src/image/avatars3.svg';
import Avatars3 from '../../src/image/avatars4.svg';
import Avatars4 from '../../src/image/avatars5.svg';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";


export function Content() {



    const tabela = [
        {
            name: 'Best Arc',
            img: Avatars,
            comment: 'Mussum Ipsum, cacilds vidis litro abertis.',
            commentaries: 'Nullam a nisl',
            date: '17.04.2021',
            status: 'pending',
            action: '...',
        },

        {
            name: 'Marvim Solza',
            img: Avatars1,
            comment: 'Mussum Ipsum, cacilds vidis litro abertis.',
            commentaries: 'Nullam a nisl',
            date: '17.04.2021',
            status: 'Answered',
            action: '...',
        },

        {
            name: 'Wade Warren',
            img: Avatars2,
            comment: 'Mussum Ipsum, cacilds vidis litro abertis.',
            commentaries: 'Nullam a nisl',
            date: '17.04.2021',
            status: 'Answered',
            action: '...',
        },

        {
            name: 'Theresa Webb',
            img: Avatars3,
            comment: 'Mussum Ipsum, cacilds vidis litro abertis.',
            commentaries: 'Nullam a nisl',
            date: '17.04.2021',
            status: 'Answered',
            action: '...',
        },

        {
            name: 'Guy Hawkins',
            img: Avatars4,
            comment: 'Mussum Ipsum, cacilds vidis litro abertis.',
            commentaries: 'Nullam a nisl',
            date: '17.04.2021',
            status: 'Answered',
        },
        {
            name: 'leslie',
            img: Avatars,
            comment: 'Mussum Ipsum, cacilds vidis litro abertis.',
            commentaries: 'Nullam a nisl',
            date: '17.04.2021',
            status: 'Answered',
        },
    ];
    return (
        <>
            <div className="title">
                <span style={{ color: '#000', margin: '15px 0 30px 0 ' }} >All Comments</span>
                <div>
                    <input className="pesquisar" placeholder="   Pesquise" />
                    <select className="selects" style={{ color: '#BEC2C6', margin: '0 0 0 650px' }} >
                        <option value="0">All dates</option>
                    </select>
                    <select className="selects" style={{ color: '#BEC2C6' }} >
                        <option value="0">Status</option>
                        <option value="1">Pending</option>
                        <option value="2">Answered</option>
                        <option value="3">Trashed</option>
                    </select>
                </div>

                <table pagination>
                    <thead>
                        <tr>
                            <th><input type="checkbox" style={{ margin: ' 0 34px 0 25px' }} />Author</th>
                            <th>Comment</th>
                            <th>Commented in</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tabela.map((item) => (
                            <tr>
                                <td className="principal">
                                    <input type="checkbox" />
                                    <div><img src={item.img} alt="avatar" /></div>
                                    {item.name}
                                </td>
                                <td>{item.comment}</td>
                                <td>{item.commentaries}</td>
                                <td>{item.date}</td>
                                <td style={{ color: '#ffb648' }}>{item.status}</td>
                                <td>{item.action}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <ul class="pagination">
                    <li><a href="#" className="paginator1"><FaArrowRight style={{ color: 'white' }} /></a></li>
                    <li><a href="#">10</a></li>
                    <li><a href="#">...</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#" className="paginator2"><FaArrowLeft style={{ color: 'white' }} /></a></li>
                </ul>
            </div >
        </>
    )
}