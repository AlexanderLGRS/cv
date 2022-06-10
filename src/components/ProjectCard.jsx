import React from 'react';

export default function ProjectCard(props) {
    const { projectName, url, projectLanguage } = props;
    return (
        <React.Fragment>
            <div className='col-12 col-md-6'>
                <div className='card text-white bg-dark mt-4'>
                    <div className='card-body'>
                        <ion-icon name={projectLanguage}></ion-icon>
                        <a target='_blank' rel='noreferrer' href={url}>
                            <h6 className='project-card-link project-card-title mb-2'>
                                {projectName}
                            </h6>
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
