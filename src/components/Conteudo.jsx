import Avatars from '../../src/image/avatars.svg';
import Avatars1 from '../../src/image/Avatar.svg';
import Avatars2 from '../../src/image/avatars3.svg';
import Avatars3 from '../../src/image/avatars4.svg';
import Avatars4 from '../../src/image/avatars5.svg';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";


export function Conteudo() {
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
                        <tr>
                            <td className="principal">
                                <input type="checkbox" />
                                <div><img src={Avatars} alt="avatar" /></div>
                                Best Arc
                            </td>
                            <td>Mussum Ipsum, cacilds vidis litro abertis.</td>
                            <td>Nullam a nisl</td>
                            <td>17.04.2021</td>
                            <td style={{ color: '#ffb648' }}>pending</td>
                            <td>...</td>
                        </tr>
                        <tr>
                            <td className="principal">
                                <input type="checkbox" />
                                <div><img src={Avatars1} alt="avatar" /></div>
                                Marvim Solza
                            </td>
                            <td>Mussum Ipsum, cacilds vidis litro abertis.</td>
                            <td>Nullam a nisl</td>
                            <td>17.04.2021</td>
                            <td style={{ color: '#5887ff' }}>Answered</td>
                            <td>...</td>
                        </tr>
                        <tr>
                            <td className="principal">
                                <input type="checkbox" />
                                <div><img src={Avatars2} alt="avatar" /></div>
                                Mussum wild
                            </td>
                            <td>Mussum Ipsum, cacilds vidis litro abertis.</td>
                            <td>Nullam a nisl</td>
                            <td>17.04.2021</td>
                            <td style={{ color: '#5887ff' }}>Answered</td>
                            <td>...</td>
                        </tr>
                        <tr>
                            <td className="principal">
                                <input type="checkbox" />
                                <div><img src={Avatars3} alt="avatar" /></div>
                                Teresinha Moça
                            </td>
                            <td>Mussum Ipsum, cacilds vidis litro abertis.</td>
                            <td>Nullam a nisl</td>
                            <td>17.04.2021</td>
                            <td style={{ color: '#5887ff' }}>Answered</td>
                            <td>...</td>
                        </tr>
                        <tr>
                            <td className="principal">
                                <input type="checkbox" />
                                <div><img src={Avatars1} alt="avatar" /></div>
                                Marco Oliveira
                            </td>
                            <td>Mussum Ipsum, cacilds vidis litro abertis.</td>
                            <td>Nullam a nisl</td>
                            <td>17.04.2021</td>
                            <td style={{ color: '#5887ff' }}>Answered</td>
                            <td>...</td>
                        </tr>
                        <tr>
                            <td className="principal">
                                <input type="checkbox" />
                                <div><img src={Avatars4} alt="avatar" /></div>
                                Luiz marqui
                            </td>
                            <td>Mussum Ipsum, cacilds vidis litro abertis.</td>
                            <td>Nullam a nisl</td>
                            <td>17.04.2021</td>
                            <td style={{ color: '#f26464' }}>Trashed</td>
                            <td>...</td>
                        </tr>
                        <tr>
                            <td className="principal">
                                <input type="checkbox" />
                                <div><img src={Avatars2} alt="avatar" /></div>
                                Mark zumq
                            </td>
                            <td>Mussum Ipsum, cacilds vidis litro abertis.</td>
                            <td>Nullam a nisl</td>
                            <td>17.04.2021</td>
                            <td style={{ color: '#5887ff' }}>Answered</td>
                            <td>...</td>
                        </tr>
                        <tr>
                            <td className="principal">
                                <input type="checkbox" />
                                <div><img src={Avatars} alt="avatar" /></div>
                                Tico e Teco
                            </td>
                            <td>Mussum Ipsum, cacilds vidis litro abertis.</td>
                            <td>Nullam a nisl</td>
                            <td>17.04.2021</td>
                            <td style={{ color: '#5887ff' }}>Answered</td>
                            <td>...</td>
                        </tr>
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