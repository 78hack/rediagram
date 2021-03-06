import React, { FC, useMemo } from 'react';
import { IconNode, HasDependences, useLabelText } from '@rediagram/cdk';
import { resolveAsset } from '../../assets';
import { useAssertProvider } from '../../hooks/assert-provider';

export type CloudFormationType = 'Change set' | 'Stack' | 'Template';

function resolveImage(type?: CloudFormationType): string {
  switch (type) {
    case 'Change set':
      return resolveAsset('management-governance/CloudFormation/Change-set.png');
    case 'Stack':
      return resolveAsset('management-governance/CloudFormation/Stack.png');
    case 'Template':
      return resolveAsset('management-governance/CloudFormation/Template.png');
    default:
      return resolveAsset('management-governance/CloudFormation.png');
  }
}

function useIcon(type?: CloudFormationType): { path: string; size: number } {
  return useMemo(() => {
    return {
      path: resolveImage(type),
      size: type === undefined ? 56 : 37,
    };
  }, [type]);
}

export type CloudFormationProps = {
  type?: CloudFormationType;
  name: string;
} & HasDependences;

export const CloudFormation: FC<CloudFormationProps> = ({ type, name, upstream, downstream, children }) => {
  useAssertProvider();
  const icon = useIcon(type);
  const label = useLabelText(children, { defaultValue: name, htmlLike: true });
  return <IconNode name={name} icon={icon} label={label} upstream={upstream} downstream={downstream} />;
};
