import { Layout } from "../../components/Layout/Layout"
import {MainPageTitle, SectionConfig, SectionGridImgRight } from "../../components/Sections/Sections.style"
import image8 from '../../assets/images/image 8.png'
import image9 from '../../assets/images/image 9.png'

function Einstein() {
    return(
        <>
            <Layout>
                    <MainPageTitle>
                        <SectionConfig>
                            <h1>Einstein GPT</h1>
                            <p>Um dos maiores diferenciais do Einstein GPT é a habilidade de oferecer experiências personalizadas. Ao analisar padrões de comportamento e interações passadas, a ferramenta pode prever e sugerir ações específicas para atender às necessidades individuais de cada cliente Isso cria um vínculo mais forte entre a marca e o cliente, resultando em maior fidelidade e satisfação.</p>
                        </SectionConfig>
                            <img src={image8}/>
                    </MainPageTitle>
                    <SectionGridImgRight>
                        <SectionConfig>
                            <div>
                                <h2>Funcionalidades e Benefícios</h2>
                                <h3>1. Personalização total</h3>
                                <p>Um dos maiores diferenciais do Einstein GPT é a habilidade de oferecer experiências personalizadas. Ao analisar padrões de comportamento e interações passadas, a ferramenta pode prever e sugerir ações específicas para atender às necessidades individuais de cada cliente Isso cria um vínculo mais forte entre a marca e o cliente, resultando em maior fidelidade e satisfação.</p>
                            </div>
                            <div>
                                <h3>2. Aumento da produtividade</h3>
                                <p>A automação é a chave para aprimorar a produtividade, e o Einstein GPT faz isso de forma excepcional. Ao automatizar tarefas repetitivas e fornecer insights acionáveis, permite que os profissionais de vendas e marketing dediquem mais tempo a atividades estratégicas e menos a processos operacionais. Esse é um movimento essencial para as empresas que querem crescem com foco, uma vez que se traduz em maior eficiência operacional e melhores resultados financeiros.</p>
                            </div>
                            <div>
                                <h3>3. Inovação Simplificada</h3>
                                <p>A capacidade do Einstein GPT de processar grandes volumes de dados e transformá-los em insights valiosos simplifica o processo de inovação. Ele oferece informações preditivas sobre tendências de mercado, comportamento do cliente e oportunidades de crescimento. Dessa maneira, as empresas têm condições de identificar novas estratégias e oportunidades de negócios com base em informações precisas e atualizadas.</p>
                            </div>
                       </SectionConfig>
                       <img src={image9}/> 
                     </SectionGridImgRight>
            </Layout>
        </>
    )
}

export default Einstein