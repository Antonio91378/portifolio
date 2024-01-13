import React from 'react'
import { AgeCalculator } from '@/utils/AgeCalculator'
import { ProfileBio, ProfileBioContainer } from '@/styles/Home'

const ProfileData: React.FC = () => {
  const myAge = AgeCalculator(`2000/07/10`)
  return (
    <ProfileBioContainer>
      <ProfileBio>
        Sou mineiro, tenho {myAge} anos e trabalho como
        {` `}
        <span className="empashis">desenvolvedor de software</span>
        {` `}
        desde 2022
        <br /> <br />
        Fiz o ensino médio no
        {` `}
        <span className="empashis">
          {` `}
          Instituto Federal do Norte de Minas Gerais{` `}
        </span>
        {` `}
        com curso técnico integrado e a partir daí, prossegui minha carreira
        acadêmica na engenharia pela instituição
        {` `}
        <span className="empashis">CEFET-MG</span>
        {` `}
        <br /> <br />
        Sou
        {` `}
        <strong className="empashis">apaixonado </strong>
        por programação, seja atuando como front, seja atuando como back,
        contudo ultimamente tenho trabalhado com
        {` `}
        <span className="tech">.NET</span>
        {` `}
        em conjunto com o{` `}
        <span className="tech">SQL Server</span>. Como objetivo, quero ficar
        cada vez mais especializado nas principais tecnologias do mercado e
        seguir acreditando que a chave de todo o sucesso é &quot;correr
        atrás&quot;.
      </ProfileBio>
    </ProfileBioContainer>
  )
}

export default ProfileData
