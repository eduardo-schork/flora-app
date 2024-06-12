import { FontAwesome } from '@expo/vector-icons';
import { IconProps } from '@expo/vector-icons/build/createIconSet';

import Colors from '../shared/styles/Colors';

function Icon({
    color = Colors.primary,
    size = 28,
    ...props
}: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color?: string;
    size?: number;
} & IconProps<string>) {
    return <FontAwesome {...{ ...props, color, size }} />;
}

export default Icon;
