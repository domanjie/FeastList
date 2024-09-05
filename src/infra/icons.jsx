export const HomeIcon = ({ className }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      className={className}
    >
      <path
        fill="#000000"
        d="M19.871 12.165l-8.829-9.758c-0.274-0.303-0.644-0.47-1.042-0.47-0 0 0 0 0 0-0.397 0-0.767 0.167-1.042 0.47l-8.829 9.758c-0.185 0.205-0.169 0.521 0.035 0.706 0.096 0.087 0.216 0.129 0.335 0.129 0.136 0 0.272-0.055 0.371-0.165l2.129-2.353v8.018c0 0.827 0.673 1.5 1.5 1.5h11c0.827 0 1.5-0.673 1.5-1.5v-8.018l2.129 2.353c0.185 0.205 0.501 0.221 0.706 0.035s0.221-0.501 0.035-0.706zM12 19h-4v-4.5c0-0.276 0.224-0.5 0.5-0.5h3c0.276 0 0.5 0.224 0.5 0.5v4.5zM16 18.5c0 0.276-0.224 0.5-0.5 0.5h-2.5v-4.5c0-0.827-0.673-1.5-1.5-1.5h-3c-0.827 0-1.5 0.673-1.5 1.5v4.5h-2.5c-0.276 0-0.5-0.224-0.5-0.5v-9.123l5.7-6.3c0.082-0.091 0.189-0.141 0.3-0.141s0.218 0.050 0.3 0.141l5.7 6.3v9.123z"
      ></path>
    </svg>
  )
}
export const MinusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="3"
      fill="none"
      viewBox="0 0 15 3"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.6"
        strokeWidth="1.5"
        d="M1.667 1.5h11.666"
      ></path>
    </svg>
  )
}
export const PlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill="none"
      viewBox="0 0 15 15"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.6"
        strokeWidth="1.5"
        d="M7.5 1.667v11.666M13.333 7.5H1.667"
      ></path>
    </svg>
  )
}
export const OrdersIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="black"
      className={`w-6 h-6 ${className}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
      />
    </svg>
  )
}
export const VendorIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="256"
      height="256"
      strokeWidth={2}
      viewBox="0 0 256 256"
      className={className}
    >
      <g fill="#000" strokeMiterlimit="15" strokeWidth="20">
        <path
          d="M79.979 22.149c0-9.383-7.634-17.018-17.017-17.018-1.732 0-3.438.26-5.079.773C54.641 2.143 49.985 0 45 0s-9.641 2.143-12.883 5.905a16.984 16.984 0 00-5.079-.773c-9.383 0-17.018 7.634-17.018 17.018 0 7.212 4.645 13.697 11.397 16.062a140.352 140.352 0 00-.703 6.471c-.004.024-.014.047-.017.071-.016.18-.024.352-.039.531-.04.491-.073.973-.107 1.456-.053.752-.101 1.497-.139 2.23-.016.317-.03.63-.043.944-.042.961-.071 1.904-.087 2.832l-.004.227c-.167 11.284 1.616 20.103 5.326 26.343l.155.259c.284.466.58.917.886 1.354.124.178.248.355.376.528.253.34.515.667.781.987.115.139.22.292.337.426.052.06.111.109.164.168.072.08.137.169.209.249.212.231.444.43.663.649.253.252.501.512.764.748.298.268.612.51.923.758.274.218.542.445.826.647.324.231.664.434 1.001.644.294.184.581.378.885.546.351.194.72.359 1.084.533.312.149.616.31.938.443.383.159.786.287 1.183.424.324.112.639.238.972.336.429.126.878.218 1.322.319.322.074.634.164.963.225.511.094 1.044.152 1.573.216.283.034.554.087.842.112a28.921 28.921 0 005.093.001c.293-.026.57-.079.857-.114.524-.063 1.051-.12 1.557-.214.335-.062.652-.154.98-.229.438-.101.882-.191 1.305-.315.338-.099.658-.227.986-.341.391-.136.789-.262 1.167-.419.327-.135.636-.299.953-.45.359-.171.722-.334 1.068-.525.308-.171.6-.367.898-.554.332-.208.669-.409.989-.637.287-.204.557-.433.834-.654.308-.246.62-.486.916-.751.265-.238.515-.499.769-.753.218-.217.448-.415.658-.644.073-.079.138-.168.21-.249.053-.06.113-.11.165-.17.118-.136.224-.29.34-.429.265-.319.525-.643.776-.98a21.4 21.4 0 00.381-.536c.304-.434.598-.882.881-1.345l.161-.268c3.709-6.24 5.491-15.057 5.324-26.339l-.003-.221c-.016-.929-.045-1.874-.087-2.835-.013-.31-.026-.62-.042-.934-.038-.734-.086-1.48-.139-2.232-.034-.482-.066-.962-.106-1.451-.014-.172-.022-.337-.037-.511-.002-.024-.012-.046-.016-.07-.182-2.109-.409-4.27-.706-6.507 6.751-2.366 11.396-8.85 11.396-16.063zm-67.958 0c0-8.281 6.737-15.018 15.018-15.018 1.739 0 3.446.296 5.073.881a1 1 0 001.121-.32A14.948 14.948 0 0145 2c4.607 0 8.896 2.075 11.767 5.693a1 1 0 001.121.32 14.993 14.993 0 015.074-.881c8.28 0 15.017 6.737 15.017 15.018 0 6.62-4.434 12.544-10.781 14.407a1 1 0 00-.709 1.097c.274 1.981.489 3.894.672 5.772-6.79-2.304-14.424-3.532-22.206-3.532-7.745 0-15.346 1.217-22.112 3.5.183-1.868.397-3.77.669-5.74a1 1 0 00-.709-1.097c-6.348-1.863-10.782-7.787-10.782-14.408zm55.64 35.473a75.51 75.51 0 01-.137 2.455l-.017.238a65.991 65.991 0 01-.23 2.468l-.005.041c-.559 4.935-1.635 9.196-3.204 12.733-.049.11-.095.224-.145.333-.198.432-.409.844-.623 1.254-.111.212-.221.425-.335.63a24.682 24.682 0 01-1.623 2.525c-.21.283-.427.554-.648.821-.167.204-.333.409-.507.604-.248.277-.51.533-.77.792-.231.231-.458.468-.699.684-.272.244-.56.465-.845.691-.245.194-.484.396-.739.577-.3.213-.617.402-.931.596-.26.161-.513.332-.782.48-.329.181-.674.335-1.016.496-.274.129-.541.27-.824.386-.359.148-.737.267-1.109.395-.285.097-.562.208-.855.293-.4.116-.819.202-1.234.295-.285.064-.561.144-.852.197-.47.086-.961.139-1.449.197-.255.03-.499.077-.758.1-.754.063-1.529.097-2.324.097-.796 0-1.571-.034-2.327-.1-.25-.022-.485-.067-.731-.096-.498-.058-.998-.113-1.477-.201-.281-.051-.545-.128-.819-.189-.426-.095-.857-.184-1.269-.304-.279-.081-.543-.187-.815-.279-.387-.131-.777-.256-1.15-.409-.27-.111-.525-.246-.788-.37-.354-.166-.712-.326-1.052-.514-.259-.143-.503-.308-.753-.462-.323-.199-.649-.394-.958-.614-.249-.177-.483-.375-.723-.565-.289-.229-.581-.453-.858-.701-.241-.216-.468-.453-.699-.684-.259-.258-.521-.512-.768-.789-.175-.196-.343-.404-.512-.61a21.05 21.05 0 01-.644-.817 22.488 22.488 0 01-1.043-1.544c-.198-.32-.393-.644-.58-.981-.116-.208-.227-.424-.339-.638a27.788 27.788 0 01-.619-1.246c-.053-.114-.101-.235-.153-.35-1.567-3.537-2.64-7.797-3.198-12.731l-.005-.042a68.03 68.03 0 01-.229-2.465l-.018-.245a77.653 77.653 0 01-.136-2.445l-.013-.399a84.78 84.78 0 01-.052-2.45c-.001-.166.002-.337.002-.504 0-.822.005-1.651.026-2.5.002-.082.007-.167.01-.249.041-1.46.122-2.969.228-4.506.033-.48.061-.953.1-1.441 6.765-2.401 14.465-3.669 22.315-3.669 7.887 0 15.62 1.279 22.408 3.701.033.409.055.805.084 1.209.185 2.618.281 5.134.278 7.529 0 .145.003.294.002.439a83.086 83.086 0 01-.054 2.477c-.002.126-.005.252-.01.376z"
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        ></path>
        <path
          d="M40.62 56.548a1 1 0 10.925-1.774c-3.192-1.664-6.43-1.664-9.622 0a1 1 0 10.925 1.774c2.615-1.363 5.157-1.363 7.772 0zM58.077 54.774c-3.193-1.665-6.433-1.664-9.622 0a1 1 0 10.924 1.774c2.617-1.362 5.157-1.363 7.774 0a1 1 0 10.924-1.774zM52.474 71.341c-5.029 3.611-9.918 3.611-14.948 0a1 1 0 10-1.167 1.625c2.867 2.058 5.753 3.087 8.64 3.087s5.773-1.029 8.64-3.087a1 1 0 10-1.165-1.625zM45 34.764a1 1 0 001-1V22.539a1 1 0 00-2 0v11.225a1 1 0 001 1zM52.186 35.488h.024c.541 0 .986-.432 1-.976.073-3.001 1.476-6.077 4.167-9.14a1 1 0 00-1.502-1.321c-3.01 3.425-4.579 6.928-4.665 10.412a1 1 0 00.976 1.025zM36.791 34.513a1 1 0 00.999.975h.025a1 1 0 00.975-1.024c-.086-3.484-1.655-6.987-4.665-10.411a.999.999 0 10-1.502 1.32c2.691 3.062 4.094 6.137 4.168 9.14z"
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        ></path>
      </g>
    </svg>
  )
}
export const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  )
}

export const MenuIcon = () => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <path
        fill="#000000"
        d="M17.5 6h-15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h15c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
      ></path>
      <path
        fill="#000000"
        d="M17.5 11h-15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h15c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
      ></path>
      <path
        fill="#000000"
        d="M17.5 16h-15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h15c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
      ></path>
    </svg>
  )
}
export const AdjustMentIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
      />
    </svg>
  )
}
export const ChevronDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  )
}
export const ChevronUp = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 15.75l7.5-7.5 7.5 7.5"
      />
    </svg>
  )
}
export const GlobeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
      />
    </svg>
  )
}

export const SaveMealIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
      />
    </svg>
  )
}
export const ChevronRight = ({ style, className }) => {
  return (
    <svg
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="22"
      fill="none"
      viewBox="0 0 6 22"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.6"
        strokeWidth="2"
        d="M1 1l4 10-4 10"
      ></path>
    </svg>
  )
}
export const LocationIcon = ({ style }) => {
  return (
    <svg
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </svg>
  )
}
export const XIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  )
}

export const CreditCardIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="17"
      fill="none"
      viewBox="0 0 21 17"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M1 4.75h19.5M1 5.5h19.5M4 10.75h6M4 13h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V3.25A2.25 2.25 0 0018.25 1h-15A2.25 2.25 0 001 3.25v10.5A2.25 2.25 0 003.25 16z"
      ></path>
    </svg>
  )
}
export const CreditCardIcon2 = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="25"
      fill="none"
      viewBox="0 0 26 25"
    >
      <path
        fill="#000"
        d="M24.386 4.29H1.585C.79 4.29.143 4.91.143 5.675v13.62c0 .765.647 1.387 1.442 1.387h22.801c.795 0 1.442-.622 1.442-1.387V5.676c0-.765-.647-1.387-1.442-1.387zm-22.801.548h22.801c.48 0 .871.376.871.838v1.798H.714V5.676c0-.462.39-.838.87-.838zm22.801 15.296H1.585c-.48 0-.871-.376-.871-.838V8.023h24.543v11.274c0 .461-.39.837-.871.837z"
      ></path>
      <path
        fill="#000"
        d="M22.785 13.511h-3.859a.28.28 0 00-.285.274v3.439a.28.28 0 00.285.274h3.859a.28.28 0 00.285-.274v-3.439a.28.28 0 00-.285-.274zm-.286 3.438h-3.287v-2.89h3.287v2.89z"
      ></path>
    </svg>
  )
}
export const ArrowLongLeft = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
      />
    </svg>
  )
}
export const HistoryIcon = () => {
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8513 18C7.88772 18 5.09483 16.5777 3.38017 14.1955C2.86173 13.4752 2.45506 12.6869 2.17195 11.8527L3.41772 11.4434C3.65995 12.1572 4.00817 12.832 4.45195 13.449C5.92083 15.4899 8.31328 16.708 10.8513 16.708C15.1719 16.708 18.6868 13.2502 18.6868 8.99978C18.6868 4.74954 15.1719 1.29177 10.8513 1.29177C6.53083 1.29177 3.01572 4.74976 3.01572 9H1.70239C1.70239 4.03731 5.80639 0 10.8511 0C15.8959 0 19.9999 4.03731 19.9999 9C19.9999 13.9627 15.8959 18 10.8513 18Z"
        fill="black"
      />
      <path
        d="M14.3714 12.6486L10.1958 9.3082V3.32263H11.5069V8.69172L15.2002 11.6452L14.3714 12.6486Z"
        fill="black"
      />
      <path d="M4.71777 7.99658L2.36 10.316L0 7.99658H4.71777Z" fill="black" />
    </svg>
  )
}
export const DetailIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
      />
    </svg>
  )
}
export const EmailIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
      />
    </svg>
  )
}
export const LockIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
      />
    </svg>
  )
}
export const MaleGenderIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18"
    >
      <g clipPath="url(#clip0_71_13)">
        <path
          fill="#000"
          d="M12.225.099v1.193h3.62l-4.322 4.32a6.92 6.92 0 00-4.472-1.635A6.96 6.96 0 00.099 10.93a6.96 6.96 0 006.952 6.952 6.96 6.96 0 006.951-6.952 6.92 6.92 0 00-1.635-4.473l4.32-4.32v3.619h1.194V.099h-5.656zM7.051 16.688a5.765 5.765 0 01-5.76-5.759 5.765 5.765 0 015.76-5.759 5.765 5.765 0 015.758 5.76 5.765 5.765 0 01-5.758 5.758z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_71_13">
          <path fill="#fff" d="M0 0H18V18H0z"></path>
        </clipPath>
      </defs>
    </svg>
  )
}
export const FemaleGenderIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18"
    >
      <path
        fill="#000"
        d="M13.118 10.063a5.845 5.845 0 000-8.257 5.845 5.845 0 00-8.257 0 5.845 5.845 0 000 8.257 5.81 5.81 0 003.536 1.677v2.389H5.924v1.186h2.473v2.566h1.186v-2.566h2.472v-1.186H9.583V11.74a5.81 5.81 0 003.535-1.677zM5.7 2.645a4.64 4.64 0 013.29-1.361c1.191 0 2.383.453 3.29 1.36a4.659 4.659 0 010 6.581 4.658 4.658 0 01-6.58 0 4.658 4.658 0 010-6.58z"
      ></path>
    </svg>
  )
}
export const PlusSmall = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  )
}
export const FeastList = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="177"
      height="39"
      fill="none"
      viewBox="0 0 177 39"
    >
      <path
        fill="#000"
        d="M2.295 31V7.727h14.91v3.534H6.51v6.319h9.67v3.534h-9.67V31H2.295zm45.552 0h-4.5L51.54 7.727h5.204L64.95 31h-4.5l-6.216-18.5h-.182L47.847 31zm.147-9.125h12.273v3.386H47.994v-3.386zm32.293-7.75c-.106-.992-.553-1.765-1.341-2.318-.78-.553-1.795-.83-3.045-.83-.88 0-1.633.133-2.262.398s-1.11.625-1.443 1.08a2.625 2.625 0 00-.511 1.556c0 .485.11.906.33 1.262.227.356.533.659.92.909.386.242.814.447 1.284.614.47.166.943.306 1.42.42l2.182.545c.879.205 1.724.481 2.534.83a8.93 8.93 0 012.193 1.318 5.85 5.85 0 011.546 1.92c.379.75.568 1.63.568 2.637 0 1.363-.349 2.564-1.046 3.602-.697 1.03-1.704 1.837-3.022 2.42-1.31.576-2.898.864-4.762.864-1.81 0-3.382-.28-4.715-.84-1.326-.561-2.364-1.38-3.114-2.455-.743-1.076-1.144-2.386-1.205-3.932h4.148c.06.81.31 1.485.75 2.023s1.011.94 1.716 1.204c.712.265 1.507.398 2.386.398.917 0 1.72-.136 2.41-.41.696-.28 1.242-.666 1.636-1.158a2.8 2.8 0 00.602-1.75c-.008-.606-.186-1.106-.534-1.5-.349-.402-.837-.735-1.466-1a14.138 14.138 0 00-2.182-.727l-2.647-.682c-1.917-.493-3.432-1.239-4.546-2.239-1.106-1.008-1.66-2.345-1.66-4.011 0-1.371.372-2.572 1.115-3.602.75-1.03 1.769-1.83 3.056-2.398 1.288-.576 2.747-.864 4.375-.864 1.652 0 3.099.288 4.341.864 1.25.568 2.231 1.36 2.944 2.375.712 1.007 1.079 2.166 1.102 3.477h-4.057zm7.11-2.864V7.727h18.569v3.534h-7.193V31H94.59V11.261h-7.193zM109.546 31V7.727h4.216v19.739h10.25V31h-14.466zm22.341-23.273V31h-4.216V7.727h4.216zm17.213 6.398c-.106-.992-.553-1.765-1.34-2.318-.781-.553-1.796-.83-3.046-.83-.879 0-1.633.133-2.261.398-.629.265-1.11.625-1.443 1.08a2.624 2.624 0 00-.512 1.556c0 .485.11.906.33 1.262.227.356.534.659.92.909.387.242.815.447 1.284.614.47.166.943.306 1.421.42l2.182.545c.878.205 1.723.481 2.534.83a8.934 8.934 0 012.193 1.318 5.857 5.857 0 011.545 1.92c.379.75.568 1.63.568 2.637 0 1.363-.348 2.564-1.045 3.602-.697 1.03-1.705 1.837-3.023 2.42-1.31.576-2.897.864-4.761.864-1.811 0-3.383-.28-4.716-.84-1.326-.561-2.364-1.38-3.114-2.455-.742-1.076-1.144-2.386-1.204-3.932h4.148c.06.81.31 1.485.75 2.023.439.538 1.011.94 1.715 1.204.713.265 1.508.398 2.387.398.916 0 1.719-.136 2.409-.41.697-.28 1.242-.666 1.636-1.158.394-.5.595-1.083.603-1.75-.008-.606-.186-1.106-.535-1.5-.348-.402-.837-.735-1.465-1a14.181 14.181 0 00-2.182-.727l-2.648-.682c-1.917-.493-3.432-1.239-4.545-2.239-1.107-1.008-1.66-2.345-1.66-4.011 0-1.371.372-2.572 1.114-3.602.75-1.03 1.769-1.83 3.057-2.398 1.288-.576 2.746-.864 4.375-.864 1.651 0 3.098.288 4.341.864 1.25.568 2.231 1.36 2.943 2.375.712 1.007 1.08 2.166 1.102 3.477h-4.057zm7.111-2.864V7.727h18.568v3.534h-7.193V31h-4.182V11.261h-7.193z"
      ></path>
      <path fill="#FFCF0D" d="M22 8H38V11.5H22z"></path>
      <path fill="#FFCF0D" d="M22 17H38V20.5H22z"></path>
      <path fill="#FFCF0D" d="M22 27H38V30.5H22z"></path>
    </svg>
  )
}
export const FeastListLogo = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="34"
      fill="none"
      viewBox="0 0 23 34"
      className={className}
    >
      <path
        fill="#FFCF0D"
        d="M15.99 1.125c.449 0 .814.353.814.787v29.926a.801.801 0 01-.814.787H1.977a.801.801 0 01-.813-.787V1.912c0-.434.365-.787.813-.787H15.99zm0-1.125H1.977C.885 0 0 .856 0 1.912v29.926c0 1.056.886 1.912 1.977 1.912H15.99c1.092 0 1.978-.856 1.978-1.912V1.912C17.968.856 17.082 0 15.99 0z"
      ></path>
      <path
        fill="#FFCF0D"
        d="M4.01.747c0 1.06.72 1.925 1.6 1.925h6.748c.88 0 1.6-.866 1.6-1.925H4.01zm6.084.94H6.422a.19.19 0 01-.194-.187.19.19 0 01.194-.187h3.672a.19.19 0 01.194.187.19.19 0 01-.194.188zm1.181.074a.266.266 0 01-.27-.26c0-.145.121-.262.27-.262.15 0 .27.117.27.261a.266.266 0 01-.27.261z"
      ></path>
      <path stroke="#FFCF0D" d="M2.761 8.975L15.184 8.975"></path>
      <path stroke="#FFCF0D" d="M2.761 13.379L10.216 13.379"></path>
      <path stroke="#FFCF0D" d="M2.761 18.05L15.184 18.05"></path>
      <path stroke="#FFCF0D" d="M2.761 22.454L15.184 22.454"></path>
      <path stroke="#FFCF0D" d="M2.759 26.524L6.489 26.524"></path>
      <path
        fill="#FFCF0D"
        d="M15.115 12.411c-4.079 0-7.385 3.17-7.385 7.082 0 1.745.662 3.341 1.755 4.576l5.63 6.358 5.63-6.358c1.093-1.235 1.755-2.83 1.755-4.577 0-3.91-3.306-7.08-7.385-7.08zm0 9.75c-1.677 0-3.037-1.304-3.037-2.912 0-1.609 1.36-2.912 3.037-2.912 1.678 0 3.037 1.303 3.037 2.912 0 1.608-1.36 2.912-3.037 2.912z"
      ></path>
      <path stroke="#FFCF0D" d="M2.761 5.372L14.494 5.372"></path>
      <rect
        width="6.074"
        height="0.4"
        x="5.936"
        y="31.362"
        fill="#FFCF0D"
        rx="0.2"
      ></rect>
    </svg>
  )
}
export const InfoIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="28"
      fill="none"
      viewBox="0 0 20 28"
    >
      <path
        fill="#000"
        d="M11.651 20.193c-.066-.03-.141-.004-.191.066-1.408 2.013-1.818 2.26-1.93 2.273-.013.002-.044-.02-.085-.085a.65.65 0 01-.086-.324c-.042-.958.361-3.914 1.2-8.787.706-4.075.771-4.901.76-5.168-.019-.397-.141-.706-.365-.919-.213-.2-.505-.281-.867-.239-.611.071-1.338.485-2.16 1.23-.236.212-.481.468-.73.757-.653.764-1.012 1.925-.959 3.105.004.097.051.18.12.21.067.03.144.002.192-.071.65-.972 1.081-1.568 1.286-1.771.217-.217.411-.337.577-.356.061-.007.092-.011.1.152.009.218-.013.478-.064.771-1.23 6.827-1.789 10.986-1.711 12.715.026.588.167 1.045.42 1.359.255.318.589.456.991.41.438-.052.964-.363 1.608-.952.31-.284.71-.742 1.192-1.363.568-.732.867-1.754.82-2.804-.005-.095-.05-.177-.118-.209zM10.683 5.113c.85 0 1.54-1.11 1.54-2.48 0-1.37-.69-2.48-1.54-2.48-.85 0-1.54 1.11-1.54 2.48 0 1.37.69 2.48 1.54 2.48z"
      ></path>
    </svg>
  )
}
export const GoogleIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="29"
      height="30"
      fill="none"
      viewBox="0 0 29 30"
    >
      <path fill="url(#pattern0)" d="M0 0H29V30H0z"></path>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use
            transform="matrix(.00202 0 0 .00195 -.005 0)"
            xlinkHref="#image0_37_11"
          ></use>
        </pattern>
        <image
          id="image0_37_11"
          width="500"
          height="512"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
  )
}
export const FastFoodIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="254"
      height="207"
      fill="none"
      viewBox="0 0 254 207"
    >
      <path
        fill="#D99439"
        d="M167.489 169.892L193.482.786l23.604 169.106h-49.597z"
      ></path>
      <path
        fill="#FFB450"
        d="M74.737 169.906L90.745.78c31.655 11.558 65.788 11.465 102.343 0l-15.606 169.126H74.737z"
      ></path>
      <path
        fill="#D99439"
        d="M74.731 34.422h102.734L193.088.785H90.748L74.731 34.422z"
      ></path>
      <path
        fill="#FF6D6F"
        d="M108.423 85.142H39.719l7.811 84.75h53.053l7.84-84.75z"
      ></path>
      <path
        fill="#EA5454"
        d="M120.169 88.458H27.973l10.51-28.69h71.176l10.51 28.69z"
      ></path>
      <path
        fill="#CC8964"
        d="M253.307 166.688H.407v40.239h252.9v-40.239z"
      ></path>
    </svg>
  )
}
export const SpeedingCourier = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="25"
      fill="none"
      viewBox="0 0 23 25"
    >
      <path
        fill="#FF9B24"
        d="M6.285 17.896H2.167c-.141 0-.256-.124-.256-.277 0-.154.115-.277.256-.277h4.118c.141 0 .256.123.256.277 0 .153-.115.277-.256.277zM6.393 15.727H.382c-.141 0-.256-.124-.256-.277 0-.153.115-.277.256-.277h6.011c.141 0 .256.124.256.277 0 .153-.115.277-.256.277zM3.833 13.558H.382c-.141 0-.256-.124-.256-.277 0-.153.115-.278.256-.278h3.451c.14 0 .255.125.255.278 0 .153-.114.277-.255.277zM3.833 11.39H2.167c-.141 0-.256-.125-.256-.278 0-.153.115-.278.256-.278h1.666c.141 0 .256.125.256.278 0 .153-.115.277-.256.277z"
      ></path>
      <path
        fill="#332929"
        d="M10.969 20.895c1.107 0 2.004-.975 2.004-2.178 0-1.203-.898-2.178-2.004-2.178-1.107 0-2.004.975-2.004 2.178 0 1.203.897 2.178 2.004 2.178z"
      ></path>
      <path
        fill="#3B65A8"
        d="M14.006 12.63v-.854h-3.237v2.846H12.2c.619 0 1.12.545 1.12 1.218v.717c0 .414.31.75.69.75h1.122v-2.712c0-.863-.46-1.607-1.127-1.965z"
      ></path>
      <path
        fill="#EFB65A"
        d="M10.969 19.814c.557 0 1.009-.491 1.009-1.097s-.452-1.097-1.01-1.097c-.556 0-1.008.491-1.008 1.097s.452 1.097 1.009 1.097z"
      ></path>
      <path
        fill="#332929"
        d="M20.845 20.895c1.107 0 2.004-.975 2.004-2.178 0-1.203-.897-2.178-2.004-2.178s-2.004.975-2.004 2.178c0 1.203.897 2.178 2.004 2.178z"
      ></path>
      <path
        fill="#EFB65A"
        d="M20.845 19.814c.557 0 1.01-.491 1.01-1.097s-.453-1.097-1.01-1.097c-.557 0-1.009.491-1.009 1.097s.452 1.097 1.01 1.097z"
      ></path>
      <path
        fill="#FF9B24"
        d="M19.622 10.32h.14c.17 0 .308.15.308.335v1.569c0 .185-.138.335-.308.335h-.14c-.569 0-1.03-.502-1.03-1.12 0-.618.461-1.12 1.03-1.12z"
      ></path>
      <path
        fill="#D71C22"
        d="M8.216 18.466h10.726c0-1.094 1.267-2.337 2.149-2.337l-2.973-5.667h-1.205l1.056 5.421a.875.875 0 01-.155.692.733.733 0 01-.584.3H14.01c-.381 0-.69-.336-.69-.75v-.716c0-.673-.501-1.218-1.12-1.218h-1.624c-1.1 0-2.083.743-2.467 1.863l-.5 1.463c-.158.46.155.949.606.949z"
      ></path>
      <path
        fill="#F6B77D"
        d="M17.77 9.919h-.732v.97c.31.02.792.083 1.038.206.104.053.224-.026.224-.151v-.45c0-.317-.238-.575-.53-.575z"
      ></path>
      <path
        fill="#C1171D"
        d="M22.697 17.25c-.274-.628-.795-1.13-1.495-1.316-.908-.24-1.88.183-2.383 1.038a2.6 2.6 0 00-.293 1.898c.03.13.187.162.263.056.876-1.216 2.334-1.794 3.737-1.45.121.028.224-.105.171-.227zM14.188 10.06c0 .812.606 1.47 1.353 1.47h1.16c.295 0 .535-.26.535-.582V9.92h-.878a.569.569 0 01-.53-.408c-.22-.667-.92-1.449-1.795-1.449-1.585.003-2.868 1.4-2.868 3.123v1.217h1.95c.316 0 .616.08.883.22-.008-.448.253-.897.782-1.346"
      ></path>
      <path
        fill="#FF9B24"
        d="M16.972 6.242c0 1.196-.892 2.165-1.992 2.165s-2.192-1.616-2.192-2.812c0-1.196 1.092-1.519 2.192-1.519s1.992.97 1.992 2.166z"
      ></path>
      <path
        fill="#F6B77D"
        d="M15.34 8.371c.826-.164 1.474-.88 1.607-1.784l-1.504-.393c-.33-.086-.623.248-.527.603l.424 1.574z"
      ></path>
      <path
        fill="#FF9B24"
        d="M6.251 9.218h4.06c.472 0 .855.416.855.929v4.044H6.25c-.471 0-.854-.416-.854-.928v-3.116c0-.513.383-.929.854-.929z"
      ></path>
    </svg>
  )
}
export const LikeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="none"
      viewBox="0 0 25 25"
    >
      <path
        fill="#FFC85A"
        d="M18.32 4.783l.716 1.45 1.597.23-1.158 1.127.275 1.59-1.43-.75-1.427.75.272-1.59-1.155-1.127 1.597-.23.713-1.45zM13.123.406l.713 1.446 1.597.234-1.155 1.125.272 1.591-1.427-.751-1.43.751.272-1.591-1.156-1.125 1.597-.234.717-1.446zM7.648 4.783l.716 1.45 1.597.23L8.806 7.59l.272 1.59-1.43-.75-1.427.75.272-1.59-1.155-1.127 1.597-.23.713-1.45z"
      ></path>
      <path
        fill="#E4EDEF"
        d="M7.493 24.566H3.967a.645.645 0 01-.645-.645V13.697c0-.356.289-.645.645-.645h3.526c.357 0 .646.289.646.645v10.224a.645.645 0 01-.646.645z"
      ></path>
      <path
        fill="#000"
        d="M19.75 9.455a.276.276 0 01-.129-.031l-1.3-.684-1.301.684a.275.275 0 01-.399-.29l.249-1.449-1.053-1.025a.275.275 0 01.152-.469l1.455-.211.65-1.318c.093-.188.4-.188.493 0l.65 1.318 1.455.211a.275.275 0 01.152.469L19.77 7.685l.249 1.449a.275.275 0 01-.27.321zm-3.15-2.8l.757.738a.275.275 0 01.078.243l-.178 1.042.936-.492a.275.275 0 01.255 0l.936.492-.178-1.042a.275.275 0 01.078-.243l.758-.738-1.047-.152a.273.273 0 01-.206-.15l-.468-.95-.469.95a.275.275 0 01-.206.15l-1.047.152zM11.693 5.077a.274.274 0 01-.27-.321l.248-1.449-1.052-1.025a.275.275 0 01.152-.469l1.455-.211.65-1.318c.092-.187.4-.187.492 0l.65 1.318 1.455.211a.275.275 0 01.152.469l-1.052 1.026.248 1.448a.275.275 0 01-.398.29l-1.3-.684-1.302.684a.28.28 0 01-.128.031zm1.429-1.3c.044 0 .087.01.127.031l.937.493-.179-1.043a.275.275 0 01.079-.243l.757-.738-1.046-.152a.274.274 0 01-.207-.15l-.468-.949-.468.949a.275.275 0 01-.207.15l-1.047.152.758.738a.274.274 0 01.079.243l-.18 1.043.937-.493a.273.273 0 01.128-.031zM9.078 9.455a.275.275 0 01-.128-.031l-1.3-.684-1.302.684a.275.275 0 01-.398-.29l.248-1.449L5.146 6.66a.275.275 0 01.152-.469l1.454-.211.65-1.318c.093-.188.4-.188.493 0l.65 1.318L10 6.19a.275.275 0 01.152.469L9.1 7.685l.248 1.449a.275.275 0 01-.27.321zm-1.429-1.3c.044 0 .088.01.128.031l.936.493-.179-1.043a.275.275 0 01.08-.243l.757-.738-1.047-.152a.274.274 0 01-.207-.15l-.468-.949-.467.949a.275.275 0 01-.207.15l-1.047.152.757.738a.275.275 0 01.08.243l-.18 1.043.937-.493a.273.273 0 01.127-.031zM7.493 24.841H3.967a.92.92 0 01-.92-.92V13.697a.92.92 0 01.92-.92h3.526a.92.92 0 01.92.92v10.224a.92.92 0 01-.92.92zM3.967 13.326a.371.371 0 00-.37.371v10.224c0 .204.166.37.37.37h3.527c.204 0 .37-.166.37-.37V13.697a.371.371 0 00-.37-.37H3.967z"
      ></path>
      <path
        fill="#F7B081"
        d="M17.395 13.345l-2.74.002c.506-4.833-.37-6.273-2.178-6.063a.53.53 0 00-.46.477c-.278 2.898-2.063 6.573-3.879 6.678v8.87h.474c.457 0 .897.17 1.233.48.337.308.777.48 1.234.48h4.93l1.386-10.924z"
      ></path>
      <path
        fill="#000"
        d="M16.01 24.543h-4.931c-.527 0-1.03-.196-1.42-.552a1.546 1.546 0 00-1.047-.408H8.14a.274.274 0 01-.275-.275V14.44c0-.146.113-.266.259-.274 1.627-.095 3.35-3.615 3.621-6.43a.806.806 0 01.702-.723c.724-.085 1.304.085 1.726.501.82.81 1.071 2.58.787 5.56l2.436-.003a.274.274 0 01.273.31l-1.386 10.923a.275.275 0 01-.273.24zm-7.597-1.51h.2c.526 0 1.03.197 1.418.553.287.263.66.408 1.048.408h4.688l1.317-10.374-2.428.002a.275.275 0 01-.274-.303c.308-2.943.113-4.714-.596-5.415-.302-.298-.718-.41-1.276-.347a.257.257 0 00-.22.23c-.252 2.63-1.865 6.474-3.877 6.892v8.355z"
      ></path>
      <path
        fill="#F7B081"
        d="M19.73 16.078H16.82a1.367 1.367 0 110-2.733h2.908a1.367 1.367 0 110 2.733z"
      ></path>
      <path
        fill="#F7B081"
        d="M20.284 18.812h-2.908a1.367 1.367 0 110-2.733h2.907a1.367 1.367 0 010 2.733z"
      ></path>
      <path
        fill="#F7B081"
        d="M19.73 21.54H16.82a1.367 1.367 0 010-2.733h2.908a1.367 1.367 0 010 2.733z"
      ></path>
      <path
        fill="#F7B081"
        d="M18.898 24.269H15.99a1.367 1.367 0 110-2.733h2.908a1.367 1.367 0 010 2.733z"
      ></path>
      <path
        fill="#000"
        d="M19.73 16.353H16.82a1.643 1.643 0 01-1.64-1.642c0-.905.735-1.641 1.64-1.641h2.908c.905 0 1.641.736 1.641 1.641s-.736 1.642-1.64 1.642zm-2.909-2.734a1.093 1.093 0 000 2.185h2.908a1.093 1.093 0 000-2.185h-2.908z"
      ></path>
      <path
        fill="#000"
        d="M20.284 19.086h-2.908a1.643 1.643 0 01-1.642-1.641c0-.905.737-1.642 1.642-1.642h2.907c.906 0 1.642.737 1.642 1.642 0 .905-.736 1.641-1.642 1.641zm-2.908-2.733c-.602 0-1.092.49-1.092 1.092 0 .602.49 1.092 1.092 1.092h2.907c.602 0 1.093-.49 1.093-1.092 0-.602-.49-1.092-1.093-1.092h-2.907z"
      ></path>
      <path
        fill="#000"
        d="M19.73 21.815H16.82a1.643 1.643 0 01-1.64-1.642c0-.905.735-1.64 1.64-1.64h2.908c.905 0 1.641.735 1.641 1.64 0 .906-.736 1.642-1.64 1.642zm-2.909-2.734a1.093 1.093 0 000 2.185h2.908a1.093 1.093 0 000-2.185h-2.908z"
      ></path>
      <path
        fill="#000"
        d="M18.897 24.543H15.99a1.643 1.643 0 01-1.642-1.641c0-.905.737-1.642 1.642-1.642h2.907c.906 0 1.642.737 1.642 1.642 0 .905-.736 1.641-1.642 1.641zM15.99 21.81c-.602 0-1.092.49-1.092 1.092 0 .603.49 1.092 1.092 1.092h2.907c.603 0 1.093-.49 1.093-1.092 0-.602-.49-1.092-1.093-1.092H15.99z"
      ></path>
    </svg>
  )
}
export const TrayActive = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="18"
      fill="none"
      viewBox="0 0 25 18"
    >
      <path
        fill="#FFCF0D"
        d="M6.71 9.974h15.25c.637 0 1.198-.403 1.379-.99l1.622-5.28c.176-.573-.27-1.147-.89-1.147H4.71L6.71 9.974z"
      ></path>
      <path
        fill="#FFCF0D"
        d="M22.107 13.396H7.525a.417.417 0 01-.405-.302L4 1.54a1.014 1.014 0 00-.988-.735H.419A.411.411 0 010 .403C0 .18.188 0 .419 0h2.594c.847 0 1.586.55 1.799 1.338L7.849 12.59h14.258c.231 0 .419.18.419.403a.411.411 0 01-.42.402zM19.222 18c-1 0-1.816-.784-1.816-1.747 0-.963.815-1.747 1.816-1.747 1.002 0 1.816.784 1.816 1.747 0 .963-.814 1.747-1.816 1.747zm0-2.885c-.652 0-1.183.51-1.183 1.138 0 .628.53 1.139 1.183 1.139s1.184-.511 1.184-1.139c0-.627-.531-1.138-1.184-1.138zM10.082 17.883c-1.002 0-1.816-.784-1.816-1.747 0-.963.815-1.747 1.816-1.747 1.001 0 1.816.784 1.816 1.747 0 .963-.815 1.747-1.816 1.747zm0-2.885c-.653 0-1.184.51-1.184 1.138 0 .628.531 1.138 1.184 1.138.652 0 1.183-.51 1.183-1.138 0-.628-.53-1.138-1.183-1.138z"
      ></path>
    </svg>
  )
}
export const TrayInActive = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="18"
      fill="none"
      viewBox="0 0 25 18"
      className={className}
    >
      <path
        fill="#000"
        d="M24.749 2.641a1.26 1.26 0 00-1.008-.49H4.846l-.233-.87C4.411.527 3.71 0 2.906 0H.34A.335.335 0 000 .33C0 .51.152.657.34.657h2.566c.494 0 .926.324 1.05.789l3.086 11.53a.337.337 0 00.329.247h14.427c.188 0 .34-.147.34-.33a.334.334 0 00-.34-.329H7.633l-.63-2.353h14.65c.774 0 1.47-.504 1.689-1.225l1.605-5.27a1.18 1.18 0 00-.198-1.076zm-.452.89L22.69 8.8a1.085 1.085 0 01-1.038.753H6.827L5.022 2.81h18.72a.58.58 0 01.463.225c.11.143.144.324.092.496zM9.866 18c-1.074 0-1.948-.848-1.948-1.89 0-1.043.874-1.891 1.948-1.891 1.074 0 1.949.848 1.949 1.89 0 1.043-.874 1.891-1.949 1.891zm0-3.123c-.7 0-1.27.553-1.27 1.232 0 .68.57 1.232 1.27 1.232.7 0 1.27-.552 1.27-1.232 0-.68-.57-1.232-1.27-1.232zM18.931 18c-1.074 0-1.948-.848-1.948-1.89 0-1.043.874-1.891 1.948-1.891 1.075 0 1.949.848 1.949 1.89 0 1.043-.874 1.891-1.949 1.891zm0-3.123c-.7 0-1.27.553-1.27 1.232 0 .68.57 1.232 1.27 1.232.7 0 1.27-.552 1.27-1.232 0-.68-.57-1.232-1.27-1.232z"
      ></path>
    </svg>
  )
}
export const FilledChevron = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="16"
      fill="none"
      viewBox="0 0 9 16"
    >
      <path
        fill="#000"
        d="M.037 7.588L8.252.078v15.019L.037 7.587z"
        opacity="0.6"
      ></path>
    </svg>
  )
}
export const Circle = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="4"
      height="4"
      fill="none"
      viewBox="0 0 4 4"
    >
      <circle cx="1.945" cy="2.098" r="1.3" fill="#D9D9D9"></circle>
    </svg>
  )
}
export const CircleDot = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="4"
      height="4"
      fill="none"
      viewBox="0 0 4 4"
    >
      <circle cx="1.889" cy="2.098" r="1.3" fill="#FFCF0D"></circle>
    </svg>
  )
}
export const Target = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <g fill="#000" clipPath="url(#clip0_705_35)">
        <path d="M19.868 9.55h-1.654c-.221-4.194-3.593-7.565-7.786-7.787V.11H9.55v1.653c-4.194.222-7.565 3.593-7.787 7.787H.11v.878h1.653c.222 4.193 3.593 7.565 7.787 7.786v1.654h.878v-1.654c4.193-.221 7.565-3.593 7.786-7.786h1.654V9.55zm-9.44 7.784v-1.628H9.55v1.628a7.369 7.369 0 01-6.906-6.906H4.27V9.55H2.644A7.369 7.369 0 019.55 2.644V4.27h.878V2.644a7.369 7.369 0 016.906 6.906h-1.628v.878h1.628a7.368 7.368 0 01-6.906 6.906z"></path>
        <path d="M9.989 13.085A3.1 3.1 0 016.892 9.99 3.1 3.1 0 019.99 6.892a3.1 3.1 0 013.096 3.097 3.1 3.1 0 01-3.096 3.096zm0-5.315A2.221 2.221 0 007.77 9.99c0 1.223.996 2.218 2.219 2.218a2.221 2.221 0 002.218-2.218A2.221 2.221 0 009.99 7.77z"></path>
      </g>
      <defs>
        <clipPath id="clip0_705_35">
          <path fill="#fff" d="M0 0H20V20H0z"></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export const ExclamationIco = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <g fill="#FF0000" clipPath="url(#clip0_736_17)">
        <path d="M7.991 15.894c-4.358 0-7.903-3.545-7.903-7.903S3.633.088 7.99.088s7.903 3.545 7.903 7.903-3.545 7.903-7.903 7.903zm0-14.401A6.505 6.505 0 001.493 7.99a6.505 6.505 0 006.498 6.498 6.505 6.505 0 006.498-6.498 6.505 6.505 0 00-6.498-6.498z"></path>
        <path d="M7.991 10.398a.703.703 0 01-.702-.702v-5.67a.703.703 0 011.405 0v5.67a.702.702 0 01-.703.702zM7.991 12.66a.708.708 0 01-.702-.703.707.707 0 01.565-.69.721.721 0 01.406.04.677.677 0 01.228.152.706.706 0 01-.497 1.2z"></path>
      </g>
      <defs>
        <clipPath id="clip0_736_17">
          <path fill="#fff" d="M0 0H16V16H0z"></path>
        </clipPath>
      </defs>
    </svg>
  )
}
