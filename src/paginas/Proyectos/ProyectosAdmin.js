import React from 'react'
import Navbar from '../../componentes/Navbar';
import SidebarContainer from '../../componentes/SidebarContainer';
import ContentHeader from '../../componentes/ContentHeader';
import Footer from '../../componentes/Footer';
import { Link } from 'react-router-dom';

const ProyectosAdmin = () => {
    return (<div className="wrapper">
        <Navbar></Navbar>
        <SidebarContainer></SidebarContainer>
        <div className="content-wrapper">
            <ContentHeader
                Titulo={'Listado Proyectos'}
                breadcrumb1={'Inicio'}
                breadcrumb2={'Dashboard'}
                ruta={'/home'}
            />
            <section className="content">
                <div className='container-fluid'>
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Title</h3>
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i className="fas fa-minus" />
                                </button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                                    <i className="fas fa-times" />
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            Start creating your amazing application!
                        </div>
                        <div className="card-footer">
                            Footer
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Responsive Hover Table</h3>
                                    <div className="card-tools">
                                        <div className="input-group input-group-sm" style={{ width: 150 }}>
                                            <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                                            <div className="input-group-append">
                                                <button type="submit" className="btn btn-default">
                                                    <i className="fas fa-search" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body table-responsive p-0">
                                    <table className="table table-hover text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Usuario</th>
                                                <th>Tipo Documento</th>
                                                <th>Numero Documento</th>
                                                <th>Nombre</th>
                                                <th>Email</th>
                                                <th>Password</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>183</td>
                                                <td>John Doe</td>
                                                <td>11-7-2014</td>
                                                <td><span className="tag tag-success">Approved</span></td>
                                                <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </section>
        </div>
        <Footer></Footer>
    </div>);
}

export default ProyectosAdmin;