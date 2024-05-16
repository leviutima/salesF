import { useState, ChangeEvent, FormEvent } from 'react';

import { Button } from "../../components/Button/Button";
import { Layout } from "../../components/Layout/Layout";
import { BackgroundForm, FormSection, Input, InputBox, ParagraphForm } from "./Contact.style";
import { ConfigDiv, FlexSection, MainPageTitle, SectionConfig } from "../../components/Sections/Sections.style";
import group from '../../assets/images/Group 26.png'

function Contact() {
    const [formData, setFormData] = useState({
        nm_clie: '',
        sobrenome: '',
        email: '',
        empresa: '',
        tamanho_empresa: '',
        pais: '',
        cargo: '',
        telefone: '',
        desc_form: '',
        seg_empresa: ''
    });

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        try {
            const response = await fetch('https://api-challenge-iuga.vercel.app/contatenos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Dados enviados com sucesso!');
            } else {
                console.error('Erro ao enviar os dados.');
            }
        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
        }
    };

    return (
        <div style={BackgroundForm}>
            <Layout>
                <MainPageTitle>
                </MainPageTitle>
                <FlexSection style={BackgroundForm}>
                    <SectionConfig>
                        <ConfigDiv>
                            <div>
                                <h2>
                                    Fale Conosco
                                </h2>
                                <p>Gostou do que viu? Ficou com alguma dúvida?</p>
                                <p>Podemos te ajudar!</p>
                            </div>
                            <div>
                                <img src={group} alt="Illustration"></img>
                            </div>
                        </ConfigDiv>
                    </SectionConfig>
                    <form onSubmit={handleSubmit}>
                        <FormSection>
                            <ParagraphForm>
                                <p>
                                    Preencha o formulário abaixo e um especialista entrará em contato com você o mais rápido possível.
                                </p>
                            </ParagraphForm>
                            <div>
                                <input type="text" id="nm_clie" name="nm_clie" value={formData.nm_clie} onChange={handleInputChange} placeholder="Nome" style={Input}></input>
                            </div>
                            <div>
                                <input type="text" id="sobrenome" name="sobrenome" value={formData.sobrenome} onChange={handleInputChange} placeholder="Sobrenome" style={Input}></input>
                            </div>
                            <div>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email corporativo" style={Input}></input>
                            </div>
                            <div>
                                <input type="tel" id="telefone" name="telefone" value={formData.telefone} onChange={handleInputChange} placeholder="Telefone" style={Input}></input>
                            </div>
                            <div>
                                <input type="text" id="cargo" name="cargo" value={formData.cargo} onChange={handleInputChange} placeholder="Cargo" style={Input}></input>
                            </div>
                            <div>
                                <input type="text" id="empresa" name="empresa" value={formData.empresa} onChange={handleInputChange} placeholder="Empresa" style={Input}></input>
                            </div>
                            <div>
                                <input type="text" id="seg_empresa" name="seg_empresa" value={formData.seg_empresa} onChange={handleInputChange} placeholder="Segmento" style={Input}></input>
                            </div>
                            <div>
                                <input type="number" id="tamanho_empresa" name="tamanho_empresa" value={formData.tamanho_empresa} onChange={handleInputChange} placeholder="Tamanho da empresa" style={Input}></input>
                            </div>
                            <div>
                                <input type="text" id="pais" name="pais" value={formData.pais} onChange={handleInputChange} placeholder="País/Região" style={Input}></input>
                            </div>
                            <div>
                                <input type="text" id="desc_form" name="desc_form" value={formData.desc_form} onChange={handleInputChange} placeholder="Perguntas/Comentários" style={InputBox}></input>
                            </div>
                            <Button type="submit" onClick={handleSubmit}>Enviar</Button>
                        </FormSection>
                    </form>
                </FlexSection>
            </Layout>
        </div>
    );
}

export default Contact;
